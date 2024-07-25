import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ShoesComponent } from './shoes/shoes.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuardService } from './authentication.guard.service';

export const routes: Routes = [
    { path: '',redirectTo: 'home',pathMatch:'full'},
    { path:'about', component: AboutComponent },
    { path:'shoes', component:ShoesComponent},
    { path: 'home', component:HomeComponent},
    { path: 'details/:id', component:DetailsComponent},
    { path: 'add', component:AddComponent, canActivate:[AuthenticationGuardService]},
    { path: 'login', component:LoginComponent},
];
