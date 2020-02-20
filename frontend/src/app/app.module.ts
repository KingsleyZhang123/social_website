import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

import { appRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './alert';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ProfileComponent } from './profile/profile.component';
import { NoteComponent } from './note/note.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PostNoteComponent } from './post-note/post-note.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    imports: [

        ReactiveFormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatButtonModule,
        MatRadioModule,
        MatCardModule,
        MatGridListModule,
        MatInputModule,
        appRoutingModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        HomeComponent,
        CardComponent,
        ProfileComponent,
        NoteComponent,
        MainpageComponent,
        PostNoteComponent,
        SearchComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { };