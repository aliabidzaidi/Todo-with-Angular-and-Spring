import { Component, OnInit } from '@angular/core';
import { DummyAuthenticationService } from '../services/dummy-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn: boolean;
  constructor( private router: Router, public authService: DummyAuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.IsUserLoggedIn();
  }

  logout() {
    this.authService.LogoutUser();
    this.router.navigate(['login']);
  }

}
