import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoeListings } from '../shoe-listings';
import { ShoesComponent } from '../shoes/shoes.component';
import { ShoesService } from '../shoes.service';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { WishlistService } from '../wishlist.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ShoesComponent, WishlistComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  shoe: ShoeListings | undefined;

  constructor(
    private route : ActivatedRoute,
    private shoeService: ShoesService,
    private wishlistService: WishlistService,
    private authenticationService : AuthenticationService,
    private router: Router
  ){}
  ngOnInit():void{
    const id =Number(this.route.snapshot.paramMap.get('id'));
    this.shoe=this.shoeService.getShoeListingsById(id);
  }

  addToWishlist():void{
    this.authenticationService.isLoggedIn().subscribe(isLoggedIn =>{
      if (isLoggedIn){
        if(this.shoe){
          this.wishlistService.addToWishlist(this.shoe);
        }
      }
      else{
        this.router.navigate(['/login']);
      }
    })
  }

}
