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
      url:'mantgames',
      text:'Games Maintainer',
      icon:'bi bi-upload'
    },
    {
      url:'mantgenres',
      text:'Genres Maintainer',
      icon:'bi bi-joystick'
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
