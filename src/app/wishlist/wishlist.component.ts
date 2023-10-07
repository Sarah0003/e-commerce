// import { Component, OnInit } from '@angular/core';
// import { CartService } from 'shared/sevices/cart.service';
// import { WishlistService } from 'shared/sevices/wishlist.service';
import { Wishlist } from 'src/core/interface/wishlist';

// @Component({
//   selector: 'app-wishlist',
//   templateUrl: './wishlist.component.html',
//   styleUrls: ['./wishlist.component.css']
// })
// export class WishlistComponent implements OnInit{
//   wishListData: Wishlist={} as Wishlist;
//   constructor(private _wishlistService:WishlistService ,private _cartService:CartService){}
//   ngOnInit(): void {
//   this.getWishList();  
// }
// addToCart(id:string){
//   this._cartService.addProductToCart(id).subscribe(
//     {
//       next:(res)=>{
//         console.log("Cart Respose in productDetails=>",res);
//       }
//     }
//   )
// }
// getWishList(){
//   this._wishlistService.getWishList().subscribe(
//     {
//       next:(res)=>{
//         console.log("getWishList",res);
//         this.wishListData=res;
//       }
//     }
//   )
// }
// deleteProduct(id:string){
//   this._wishlistService.deleteFromWishList(id).subscribe(
//     {
//       next:(res)=>{
//         console.log("Delete product from WishList",res);
//         this.wishListData=res;
//       }
//     }
//   )
// }



// }

// wishlist.component.ts (Parent Component)
import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'shared/sevices/wishlist.service';
// import { Wishlist } from 'path-to-your-wishlist-interface'; // Import your Wishlist interface

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishListData: Wishlist = {} as Wishlist; // Use your Wishlist data type

  constructor(private _wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.getWishList();
  }

  addToWishlist(id: string) {
    this._wishlistService.addProductToWishList(id).subscribe({
      next: (res) => {
        console.log("addToWishList Response =>", res);
        // Update the wishlist with the response or use your own logic
        this.getWishList();
      },
      error: (err) => {
        console.log("The addToWishList error:", err);
      }
    });
  }

  getWishList() {
    this._wishlistService.getWishList().subscribe({
      next: (res) => {
        console.log("getWishList", res);
        this.wishListData = res; // Update the wishlist data
      }
    });
  }

  deleteProduct(id: string) {
    this._wishlistService.deleteFromWishList(id).subscribe({
      next: (res) => {
        console.log("Delete product from WishList", res);
        // Update the wishlist with the response or use your own logic
        this.getWishList();
      }
    });
  }
}

