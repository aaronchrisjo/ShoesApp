import { Component, inject } from '@angular/core';
import { ShoeListings } from '../shoe-listings';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ShoesService } from '../shoes.service';

@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.css'
})
export class ShoesComponent {
  shoes: ShoeListings[] = [];

  shoesService: ShoesService = inject(ShoesService);

  constructor(){
    this.shoes = this.shoesService.getAllShoeListings();
  }

}
