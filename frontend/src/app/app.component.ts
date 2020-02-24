import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { AuthenticationService } from './services';
import { User } from './models';



@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private bnIdle: BnNgIdleService,
        public dialog: MatDialog
    ) {

        this.bnIdle.startWatching(5)
            .subscribe((res) => {
                if (res && this.isOnline()) {
                    console.log("session expired");
                    this.openDialog();
                    this.authenticationService.logout();
                }
            });
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    isOnline() {
    	return this.currentUser != undefined;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    login() {
    	this.router.navigate(['/login']);
    }

    openDialog() {
        const dialogRef = this.dialog.open(SessionExpiredDialog, {
          width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
    }
}



@Component({
  selector: 'session-expired-dialog',
  templateUrl: 'session-expired-dialog.html',
})
export class SessionExpiredDialog {

  constructor(public dialogRef: MatDialogRef<SessionExpiredDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}