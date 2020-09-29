import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticationStatus')
    console.log(!(user === null))
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticationStatus');
  }

}
