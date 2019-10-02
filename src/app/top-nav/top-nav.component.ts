import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  openMenu = false;
  toggleHeader = () => {
    this.openMenu = !this.openMenu;
    console.log(this.openMenu);
  }
  constructor() {}

  ngOnInit() {}
}
