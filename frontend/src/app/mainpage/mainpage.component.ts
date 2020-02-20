import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { first, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { User, Note } from '../models';
import { AuthenticationService, UserService} from '../services';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  private tag: string;
  private currentUser: User;
  private notes: Note[];

  constructor(
  		private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
    	
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit() {
    console.log(this.currentUser)

  	this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('tag'))
    )).subscribe(tag_id => {
      this.tag_id = tag_id;
      this.getNotesByTag(+this.tag_id);
    })
    

  }

  getNotesByTag(tag_id: number) {
    this.userService.getNotesByTag(tag_id).subscribe(
      data => {
        console.log(data);
        this.notes = data;
      },
      error => {
        console.log(error);
      });
  }

}
