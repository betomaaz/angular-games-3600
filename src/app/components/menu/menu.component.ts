import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  items : any[] = [
    {
    url:'home',
    text:'Games',
    icon:'bi-controller'
    },
    {
      url:'about',
      text:'About',
      icon:'bi-info-circle'
    },
    {
      url:'contact',
      text:'Contact',
      icon:'bi-telephone'
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
