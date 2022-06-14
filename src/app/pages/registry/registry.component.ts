import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';
import { RegistryService } from 'src/app/services/registry.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  newUser : User = {};
  error:boolean = false;
  errorMsj: string = "";
  errorMsj2: string = "";
  match: boolean = false;

  constructor(
    private fb:FormBuilder, 
    private userService:UserService,
    private router:Router
    ) { }

  registryForm:FormGroup = this.fb.group({
    "email" : new FormControl(null, Validators.compose([Validators.required,Validators.email])),
    "password" : new FormControl(null, Validators.required),
    "confirmpassword" : new FormControl(null, Validators.required)
  })

  ngOnInit(): void {
  }

  get email(){
    return this.registryForm.get("email");
  }
  get password(){
    return this.registryForm.get("password");
  }
  get confirmpassword(){
    return this.registryForm.get("confirmpassword");
  }

  matchPasswords(){
    
  }


  async submitForm(){
    if(this.registryForm.valid){
      console.log("funciona");
      if(this.registryForm.valid){
        this.newUser.email = this.email?.value;
        this.newUser.password = this.password?.value;
        this.newUser.confirmpassword = this.confirmpassword?.value;

        if(this.password?.value == this.confirmpassword?.value){
        
          const result = await this.userService.postAccount(this.newUser);
            if(result){
              this.router.navigate(["/home"])
            }else{
              this.error = true;
              this.errorMsj = "El usuario o contraseña son inválidos"
            }
        }else{
          this.errorMsj2 = "Las contraseñas no coinciden. Vulve a intentarlo."
        }
      }
    }
  }
}
