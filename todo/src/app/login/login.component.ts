import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'abidzaidi';
  password = '';
  isValid = false;
  errorMessage = 'Invalid User Credentials';

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.username === 'abidzaidi' && this.password === 'password') {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }

}
