import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'shared/sevices/cart.service';
import { WishlistService } from 'shared/sevices/wishlist.service';
import { Product } from 'src/core/interface/product';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent {
  @Input() product: Product = {} as Product;
  isAddedToWishlist: boolean = false;



  constructor(private _cartService: CartService, private _wishlistService: WishlistService,private _toastrService: ToastrService) { }


  addToCart(id: string) {
    this._cartService.addProductToCart(id).subscribe(
      {
        next: (res) => {
          console.log("Cart Respose =>", res);
          this._cartService.numOfCartItems.next(res.numOfCartItems)
        },
        error: (err) => {
          console.log("The product-iems error:", err);

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

