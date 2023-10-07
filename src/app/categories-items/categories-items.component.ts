import { Component } from '@angular/core';
import { Category } from 'src/core/interface/category';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-categories-items',
  templateUrl: './categories-items.component.html',
  styleUrls: ['./categories-items.component.css']
})
export class CategoriesItemsComponent {
  allcategoriesItems:Category[] =[];
  constructor(private _productsService:ProductsService){

  }
  
  ngOnInit(): void {
    this.getCategoriesItems();
  }
  
  getCategoriesItems(){
  this._productsService.getCategory().subscribe(
    {
      next:(res)=>{
        console.log("getCategories=",res.data);
        this.allcategoriesItems=res.data
      }
    }
  )
  }
}
