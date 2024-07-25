import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthenticationGuardService } from '../authentication.guard.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoUrl: string = 'assets/logo.png';

  constructor(private authenticationService: AuthenticationService) {}

  logout():void{
    this.authenticationService.logout();
  }
}
