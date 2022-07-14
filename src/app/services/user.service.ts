import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User, userToken } from '../interfaces/interfaces';

const url = environment.URL; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userLogged: boolean = false
  token : any;
  userName: string = "";
  userRole: string = "";

  constructor(private http:HttpClient, private router:Router) { }

  async login(user : User){

    return new Promise(resolve =>{
      this.http.post<userToken>(`${url}/user/login`, user)
      .subscribe(resp => {
        console.log(resp);
        if(resp.ok){
          this.saveToken(resp.token);
          this.readToken();
          resolve(true);
        }else{
          this.removeToken();
          resolve(false);
        }
      });
    })

  }

  saveToken(token:string){
    localStorage.setItem("token",token);
    this.token = token;
    this.userLogged = true;
  }

  removeToken(){
    localStorage.removeItem("token");
  }

  uploadToken(){
    var tokenString = localStorage.getItem("token")?.toString();
    this.token = tokenString;
    if(this.token){
      this.userLogged = true;
      this.readToken();
    }
  }

  readToken(){
    let jwt = this.token;
    let jwtData = jwt.split('.')[1];
    let decodeJSONJwtData = window.atob(jwtData);
    let decodeJwtData = JSON.parse(decodeJSONJwtData);

    console.log(decodeJwtData)
    this.userName = decodeJwtData.user.nombre;
    //this.userRole = decodeJwtData['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
  }

  logout(){
    this.removeToken();
    this.userLogged = false;
    this.userName = "";
    this.userRole = "";
  }

  async validateUser():Promise<boolean>{
    this.uploadToken();
    if(!this.token){
      this.router.navigate(['/login'])
      return Promise.resolve(false);
    }
    else{
      return Promise.resolve(true);
    }
  }


  async postAccount(user:User){
    return new Promise(resolve =>{
      this.http.post<userToken>(`${url}/user`, user)
      .subscribe(resp => {
        console.log(resp);
        if(resp.ok){
          this.saveToken(resp.token);
          this.readToken();
          resolve(true);
        }else{
          this.removeToken();
          resolve(false);
        }
      });
    })
  }
}
