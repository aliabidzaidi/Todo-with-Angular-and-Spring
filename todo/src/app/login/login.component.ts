import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.username === 'abidzaidi' && this.password === 'password') {
      this.router.navigate(['welcome', this.username]);
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }

}
