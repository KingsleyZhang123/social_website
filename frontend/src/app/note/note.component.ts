import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Note, User, Comment } from '../models';

import { UserService, AuthenticationService } from '../services';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  private user: User;
  private currentUser: User;
  private comments: Comment[];
  private commentContent = new FormControl('');
  
  constructor(
    private authenticationService: AuthenticationService,
  	private router: Router,
  	private userService: UserService) { 

  }

  ngOnInit() {

    this.authenticationService.currentUser
      .subscribe(user => {
        this.currentUser = user;
      });

  	this.userService.getUserById(this.note.user_id)
  		.subscribe(user => {
  			this.user = user;
  		});

    this.userService.getCommentsByNoteId(this.note.id)
      .subscribe(comments => {
        this.comments = comments;
      });
  }

  gotoProfile() {
  	this.router.navigate([`/profile/${this.user.user_id}`]);
  }

  postComment() {
    let comment = new Comment(this.note.id, this.currentUser.user_id, this.commentContent.value, new Date());
    this.userService.postComment(comment)
      .subscribe(
        data => {
          console.log(data);
          this.ngOnInit();
        },
        error => {
          console.log(error);
        }
        );
  }
 

}
