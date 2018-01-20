import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { QuantityCounterComponent } from './shared/quantity-counter/quantity-counter.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    QuantityCounterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
