import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailLogin = new FormControl('', [Validators.required, Validators.email]);
  passwordLogin = new FormControl('',[Validators.required,Validators.required]);

  emailSignUp = new FormControl('',[Validators.required, Validators.email]);
  passwordSignUp = new FormControl('', [Validators.required, Validators.required]);
  userNameSignUp = new FormControl('',[Validators.required,Validators.required]);

  emailId:string;

  status:string;
  flag:boolean = false;

  users = {};


  constructor(private router: Router
    ) { }

  ngOnInit() {
    this.flag = false;
    console.log('In ngOninit'+this.flag);
  }

  checkUser(){

    if(this.emailLogin.value == null && this.passwordLogin.value == null)
    return false;

    for(var i in this.users)
    {
      if(this.users[i].emailAddress!=this.emailLogin.value || this.users[i].password!=this.passwordLogin.value){
       this.flag = true;   // Either email address or password does not match       
      }
      else{
        this.flag=false;    // He is a valid user
        break;
      }
    }

    if(this.flag==true && this.emailLogin.value!=null && this.passwordLogin.value!=null){
      console.log('Not a valid user');
      return false;
    }
    else{
      console.log('Valid User');
      console.log(this.passwordLogin.value);
      return true;
    }
  }

  loginUser(){
    if(this.checkUser){
      sessionStorage.setItem('authenticationStatus', 'valid');
      this.router.navigate(['orderbook']);
    }
  }


  getErrorMessage() {

    if(this.emailLogin.touched){
    return this.emailLogin.hasError('required') ? 'You must enter a value' :
        this.emailLogin.hasError('emailLogin') ? 'Not a valid email' :
            '';
          }
    if(this.emailSignUp.touched){
      return this.emailSignUp.hasError('required') ? 'You must enter a value' :
      this.emailSignUp.hasError('emailSignUp') ? 'Not a valid email' : '';
    }   

    if(this.userNameSignUp.touched){
      return this.userNameSignUp.hasError('required') ? 'You must enter your username' :
      this.userNameSignUp.hasError('userNameSignUp') ? 'Not a valid Username' : '';
    }
  }

  createUser(form){
    console.log("allo");
  }

}
