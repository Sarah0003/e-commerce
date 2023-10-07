import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/core/interface/category';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  allCategories:Category[] =[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin:20,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 8
      },
      
    },
    nav: true
  }
constructor(private _productsService:ProductsService){

}

ngOnInit(): void {
  this.getCategories();
}

getCategories(){
this._productsService.getCategory().subscribe(
  {
    next:(res)=>{
      console.log("getCategories=",res.data);
      this.allCategories=res.data
    }
  }
)
}
}
