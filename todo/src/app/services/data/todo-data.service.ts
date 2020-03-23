import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "src/app/list-todo/list-todo.component";

@Injectable({
  providedIn: "root"
})
export class TodoDataService {
  constructor(private client: HttpClient) { }

  GetAll(username) {
    return this.client.get<Todo[]>(
      `http://localhost:8080/users/${username}/todos`
    );
  }

  DeleteTodo(username, id) {
    return this.client.delete(
      `http://localhost:8080/users/${username}/todo/${id}`
    );
  }

  GetTodo(username, id) {
    return this.client.get<Todo>(
      `http://localhost:8080/users/${username}/todo/${id}`
    );
  }

  UpdateTodo(username, id, todo) {
    return this.client.put<Todo>(
      `http://localhost:8080/users/${username}/todo/${id}`,
      todo
    );
  }

  AddTodo(username, todo) {
    return this.client.post<Todo>(
      `http://localhost:8080/users/${username}/todo`,
      todo
    );
  }
}
