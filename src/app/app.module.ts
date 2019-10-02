import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TopNavComponent } from './top-nav/top-nav.component';
import { OrderNavComponent } from './order-nav/order-nav.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    OrderNavComponent,
    SearchHeaderComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AngularSvgIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
