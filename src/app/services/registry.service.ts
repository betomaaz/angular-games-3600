import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User, userToken } from '../interfaces/interfaces';

const url = environment.URL; 

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  userLogged: boolean = false
  token : any;
  userName: string = "";
  userRole: string = "";

  constructor(private http:HttpClient) { }

  async login2(user : User){

    return new Promise(resolve =>{
      this.http.post<userToken>(`${url}/account/login`, user)
      .subscribe(resp => {
        console.log(resp);
        if(resp.status == "ok"){
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
    this.userName = decodeJwtData['unique_name'];
    this.userRole = decodeJwtData['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
  }

  logout(){
    this.removeToken();
    this.userLogged = false;
    this.userName = "";
    this.userRole = "";
  }

  postAccount(user:User){
    return this.http.post(`${url}/Account`,user);
  }
}
