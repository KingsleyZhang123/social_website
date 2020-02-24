import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Note, User } from '../models';

import { UserService } from '../services';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  private user: User
  
  constructor(
  	private router: Router,
  	private userService: UserService) { 

  }

  ngOnInit() {
  	this.userService.getUserById(this.note.user_id)
  		.subscribe(user => {
  			this.user = user;
  		})
  }

  gotoProfile() {
  	this.router.navigate([`/profile/${this.user.user_id}`]);
  }

}
