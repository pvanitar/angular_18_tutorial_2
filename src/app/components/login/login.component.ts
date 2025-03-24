import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj: any = {
    userName:'',
    password:''
  };

  router =  inject(Router);
  http = inject(HttpClient)

  onLogin(){
    debugger;
    this.router.navigateByUrl('add-emp')
    if(this.userObj.userName == "admin" && this.userObj.password =="1234") {
      debugger;
      alert("login Success");
      localStorage.setItem('loginUser',this.userObj.userName)
      this.router.navigateByUrl('add-emp')
    } else {
      alert('Wrong Credentials')
      this.router.navigateByUrl('login')
    }
  }

}
