import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'shared/sevices/cart.service';
import { WishlistService } from 'shared/sevices/wishlist.service';
import { Product } from 'src/core/interface/product';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productId: string = '';
  isAddedToWishlist: boolean = false;

  productDetails: Product = {} as Product
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      
    },
    nav: true
  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductsService, 
    private _cartService:CartService ,
    private _wishlistService:WishlistService,
    private _toastrService:ToastrService) {
    this._activatedRoute.paramMap.subscribe((res: any) => {
      console.log("productId", res.params.id);
      this.productId = res.params.id;
    });
    this._productService.getProductById(this.productId).subscribe({
      next: (res) => {
        console.log("getProductById", res.data);
        this.productDetails = res.data;
      }
    });
  }

  addToCart(id:string){
    this._cartService.addProductToCart(id).subscribe(
      {
        next:(res)=>{
          console.log("Cart Respose in productDetails=>",res);
        }
      }
    )
  }


  addToWishList(id: string) {

    this._wishlistService.addProductToWishList(id).subscribe(
      {
        next: (res) => {
          console.log("addToWishList Respose =>", res);
          this.isAddedToWishlist = true;
          this._toastrService.success(res.message)

        },
        error: (err) => {
          console.log("The addToWishList error:", err);
        }
      })
  }




  deleteProduct(id: string) {
    this._wishlistService.deleteFromWishList(id).subscribe(
      {
        next: (res) => {
          console.log("Delete product from WishList", res);
          this.isAddedToWishlist = false;

        }
      }
    )
  }
}
