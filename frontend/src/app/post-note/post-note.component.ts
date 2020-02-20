import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Note, User } from '../models';
import { AuthenticationService ,UserService } from '../services';
 

@Component({
  selector: 'post-note',
  templateUrl: './post-note.component.html',
  styleUrls: ['./post-note.component.css']
})
export class PostNoteComponent implements OnInit{
	@Input() user_id: string;
	@Input() tag_id: number;

	noteControl = new FormControl('', [Validators.required, Validators.minLength(10)]);


  constructor(private userService: UserService) {
  	
  }

  ngOnInit() {
  	console.log(this.user_id);
  	console.log(this.tag_id);
  }

  getErrorMessage() {
  	return this.noteControl.hasError('required') ? "content can not be empty":
  		this.noteControl.hasError('minLength') ? "at least 10 words" : "";
  }

  onSubmit() {
        console.log(this.noteControl.value);
        let note = new Note(this.user_id, this.noteControl.value, new Date(), this.tag_id);
        this.userService.postNote(note).subscribe(
        	data => {
        		console.log(data);
        	},
        	error => {
        		console.log(error);
        	})

  }

}
