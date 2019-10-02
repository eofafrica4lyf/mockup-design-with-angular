import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-nav',
  templateUrl: './order-nav.component.html',
  styleUrls: ['./order-nav.component.css']
})
export class OrderNavComponent implements OnInit {
  openMenu = false;
  toggleHeader = () => {
    this.openMenu = !this.openMenu;
  }
  constructor() {}

  ngOnInit() {}
}
