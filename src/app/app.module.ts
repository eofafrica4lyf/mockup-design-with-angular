import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TopNavComponent } from './top-nav/top-nav.component';
import { OrderNavComponent } from './order-nav/order-nav.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { IntroAfterHeaderComponent } from './intro-after-header/intro-after-header.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { RecommendedRestaurantComponent } from './recommended-restaurant/recommended-restaurant.component'

import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    OrderNavComponent,
    SearchHeaderComponent,
    IntroAfterHeaderComponent,
    RestaurantCardComponent,
    RecommendedRestaurantComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AngularSvgIconModule,RatingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
