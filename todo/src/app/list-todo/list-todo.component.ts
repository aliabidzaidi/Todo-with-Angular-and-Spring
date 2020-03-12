import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';

export class Todo {

  constructor(
    public Id: number,
    public UserName: string,
    public Description: string,
    public CreatedDate: Date,
    public CompletedDate: Date,
    public IsCompleted: boolean
  ) { }

}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos: Todo[];
  // [
  //   new Todo(1, 'Grocery list, a, b, c.', false, new Date()),
  //   new Todo(1, 'Places to visit', false, new Date()),
  //   new Todo(1, 'Madagascar, Maldives, a, b, c.', false, new Date()),
  //   new Todo(1, 'Fav Laptops', true, new Date())
  // ];

  constructor(private todoService: TodoDataService) { }

  ngOnInit(): void {
    this.todoService.GetAll('abidzaidi').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
