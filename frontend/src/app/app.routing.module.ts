import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { MainpageComponent } from './mainpage';
import { ProfileComponent } from './profile';



const routes: Routes = [
	{ path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'mainpage/:tag', component: MainpageComponent},
    { path: 'profile/:user_id', component: ProfileComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);