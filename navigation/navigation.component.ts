import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleMenus() {
    if (document.getElementById("nav").hasAttribute("class")) {
      document.getElementById("nav").removeAttribute("class");
    } else {
      document.getElementById("nav").setAttribute('class', 'active');
    }
  }

}
