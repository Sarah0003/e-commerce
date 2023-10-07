import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { authGuard } from 'src/core/guard/auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoriesItemsComponent } from './categories-items/categories-items.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", canActivate: [authGuard], component: HomeComponent },
  { path: "about", canActivate: [authGuard], component: AboutComponent },
  { path: "products", canActivate: [authGuard], component: ProductsComponent },
  { path: "brands", canActivate: [authGuard], component: BrandsComponent },
  { path: "categories", canActivate: [authGuard], component: CategoriesComponent },
  { path: "productDetails/:id", canActivate: [authGuard], component: ProductDetailsComponent },
  { path: "categoryItems", canActivate: [authGuard], component: CategoriesItemsComponent },
  { path: "wishlist", canActivate: [authGuard], component: WishlistComponent },


  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "checkout/:cartId", component: CheckoutComponent},
  { path: "allorders", component: OrdersComponent},

 
  { path: "cart",canActivate: [authGuard], loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: "setting", canActivate: [authGuard], loadChildren: () => import('./setting/setting.module').then((x) => x.SettingModule) },


  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
