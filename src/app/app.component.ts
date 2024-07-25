import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ShoesComponent } from "./shoes/shoes.component";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ShoesComponent,RouterModule,HeaderComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Test Application';
}
