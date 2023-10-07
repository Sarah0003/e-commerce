import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrandsComponent } from './brands/brands.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { TrimPipe } from '../core/pipe/trim.pipe';
import { SearchPipe } from '../core/pipe/search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpIntercetorInterceptor } from './http-intercetor.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoriesItemsComponent } from './categories-items/categories-items.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DropdownModule } from 'primeng/dropdown';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    SignupComponent,
    LoginComponent,
    NotFoundComponent,
    BrandsComponent,
    NavbarComponent,
    FooterComponent,
    FeaturedProductsComponent,
    ProductItemsComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    MainWrapperComponent,
    TrimPipe,
    SearchPipe,
    CheckoutComponent,
    OrdersComponent,
    LoaderComponent,
    CategoriesItemsComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatProgressSpinnerModule,
    DropdownModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RatingModule,
    CommonModule,
    ToastrModule.forRoot(),  
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpIntercetorInterceptor,
      multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
