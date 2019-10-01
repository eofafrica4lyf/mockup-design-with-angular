import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  openMenu = false;
  toggleHeader = () => {
    this.openMenu = !this.openMenu;
    console.log(this.openMenu);

  }

}
