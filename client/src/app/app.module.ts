import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {HttpClientModule} from '@angular/common/http';
import {ProductItemComponent} from './products/components/product-item/product-item.component';
import {ProductListComponent} from './products/components/product-list/product-list.component';
import {FormsModule} from "@angular/forms";
import {NgxImageCompressService} from "ngx-image-compress";
import {NgxPaginationModule} from 'ngx-pagination';

import {environment} from "../environments/environment";

@NgModule({
  declarations: [AppComponent, ProductItemComponent, ProductListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent],
})

export class AppModule {
  transform = [{"height": "300", "width": "300", "focus": "auto"}]
}
