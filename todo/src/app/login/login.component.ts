import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DummyAuthenticationService } from '../services/dummy-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'abidzaidi';
  password = 'password';
  isValid = false;
  errorMessage = 'Invalid User Credentials';

  constructor(private router: Router, private authService: DummyAuthenticationService) {
    if (this.authService.IsUserLoggedIn()) {
      this.router.navigate(['welcome', this.username]);
    }
  }

  ngOnInit(): void {
  }

  handleLogin() {
    // if (this.username === 'abidzaidi' && this.password === 'password') {
    if (this.authService.AuthenticateUser(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }

}
