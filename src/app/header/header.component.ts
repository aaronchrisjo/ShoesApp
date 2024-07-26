import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthenticationGuardService } from '../authentication.guard.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoUrl: string = 'assets/logo.png';
  isAuthenticated : boolean =false;

  constructor(private authenticationService: AuthenticationService,
    public router:Router
  ) {}

  ngOnInit():void{
    this.authenticationService.isLoggedIn().subscribe(status=>{
      this.isAuthenticated = status;
    })
  }

  logout():void{
    this.authenticationService.logout();
  }
}
