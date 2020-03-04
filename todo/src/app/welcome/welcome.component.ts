import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DummyAuthenticationService } from '../services/dummy-authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName = '';

  constructor(private route: ActivatedRoute, private router: Router, private authService: DummyAuthenticationService) {
    if (!this.authService.IsUserLoggedIn()) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
    this.userName = this.route.snapshot.params.name;
  }

}
