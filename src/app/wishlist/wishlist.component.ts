import { Component, OnInit } from '@angular/core';
import { ShoeListings } from '../shoe-listings';
import { WishlistService } from '../wishlist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit{
  wishlist: ShoeListings[]=[];

  constructor(private wishlistService: WishlistService){};

  ngOnInit(): void {
    this.wishlistService.wishlist$.subscribe(wishlist => {
      this.wishlist = wishlist;
    });
  }
}
