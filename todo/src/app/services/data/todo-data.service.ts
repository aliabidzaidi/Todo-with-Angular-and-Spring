import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todo/list-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private client: HttpClient) { }

  GetAll(username) {
    return this.client.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }
}
