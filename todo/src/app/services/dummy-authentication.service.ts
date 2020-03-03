import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyAuthenticationService {

  constructor() { }

  AuthenticateUser(username: string, password: string): boolean {
    // console.log(this.IsUserLoggedIn() + ' before');
    if (username === 'abidzaidi' && password === 'password') {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log(this.IsUserLoggedIn() + ' after');
      return true;
    }
    this.LogoutUser();
    return false;
  }

  IsUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user == null);
  }

  LogoutUser() {
    sessionStorage.removeItem('authenticatedUser');
  }


}
