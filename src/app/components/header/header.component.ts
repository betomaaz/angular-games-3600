import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLogged: boolean = false;
  userName: string = "";
  userRole: string = "";



  constructor(
    private userService:UserService, 
    private router:Router
    ) { }

  ngOnInit(): void {
    this.userService.uploadToken();
    this.userLogged = this.userService.userLogged;
    this.userName = this.userService.userName;
    this.userRole = this.userService.userRole;
  }

  logout(){
    this.userService.logout();
    this.router.navigate(["/login"])
  }

}
