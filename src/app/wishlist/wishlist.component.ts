
import { Wishlist } from 'src/core/interface/wishlist';
import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'shared/sevices/wishlist.service';

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
        this.wishListData = res; 
      }
    });
  }

  deleteProduct(id: string) {
    this._wishlistService.deleteFromWishList(id).subscribe({
      next: (res) => {
        console.log("Delete product from WishList", res);
        this.getWishList();
      }
    });
  }
}

