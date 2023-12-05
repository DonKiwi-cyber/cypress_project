import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router){}

  name = "";
  password = "";

  login(){
    if(this.name == "ian" && this.password == "ian"){
      this.router.navigate(['/ui'])
    }
    else{
      console.log(this.name)
      console.log(this.password)
      alert("Introduzca datos correctos")
    }
  }
}

