import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  openMenu = false;
  toggleHeader = () => {
    this.openMenu = !this.openMenu;
    console.log(this.openMenu);
  }
  constructor() { }

  ngOnInit() {
  }

}
