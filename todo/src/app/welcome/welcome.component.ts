import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DummyAuthenticationService } from '../services/dummy-authentication.service';
import { DataService, HelloWorldBean } from '../services/api/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName = '';
  message = '';

  constructor(private route: ActivatedRoute, private router: Router,
              private authService: DummyAuthenticationService, private apiCaller: DataService) {
    if (!this.authService.IsUserLoggedIn()) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
    this.userName = this.route.snapshot.params.name;
  }

  getHelloWorldMessage() {
    this.apiCaller.GetHelloWorld().subscribe(
      response => this.parseResponse(response),
      error => this.handleError(error)
    );
  }

  getHelloWorldMessageWithParams() {
    this.apiCaller.GetHelloWorldWithParams(this.userName).subscribe(
      response => this.parseResponse(response),
      error => this.handleError(error)
    );
  }

  private parseResponse(response: HelloWorldBean) {
    this.message = response.message;
  }

  private handleError(error) {
    console.log('An error occured in API : ' + error.error.message);
  }


}
