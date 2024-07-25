import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoeListings } from '../shoe-listings';
import { ShoesComponent } from '../shoes/shoes.component';
import { ShoesService } from '../shoes.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ShoesComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  shoe: ShoeListings | undefined;

  constructor(
    private route : ActivatedRoute,
    private shoeService: ShoesService
  ){}
  ngOnInit():void{
    const id =Number(this.route.snapshot.paramMap.get('id'));
    this.shoe=this.shoeService.getShoeListingsById(id);
  }

}
