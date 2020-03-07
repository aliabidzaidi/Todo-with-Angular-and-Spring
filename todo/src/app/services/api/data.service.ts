import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  GetHelloWorld() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/bean');
  }

  GetHelloWorldWithParams(name) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080//bean/path/${name}`);
  }

}
