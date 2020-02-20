import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services';
import { User } from '../models';

import { UserService } from '../services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  currentUser: User;
  
  constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
    	
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit() {
  	this.currentUser = localStorage.getItem['currentUser']
  }

}
