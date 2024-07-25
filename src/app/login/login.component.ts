import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { AuthenticationGuardService } from '../authentication.guard.service';
import { Route, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null=null;

  constructor(private fb: FormBuilder,private authenticationService: AuthenticationService, private router:Router){
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    });
  }

  onSubmit():void{
    if(this.loginForm.valid){
      const {username, password} = this.loginForm.value;
      this.authenticationService.login(username,password).subscribe((isLoggedIn)=>{
        if(isLoggedIn){
          this.router.navigate(['/shoes']);
        }
        else{
          this.errorMessage = 'Invalid Username or Password';
        }
      });
    }
  }
}
