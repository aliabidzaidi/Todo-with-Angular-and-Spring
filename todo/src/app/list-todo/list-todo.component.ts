import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {

  constructor(
    public id: number,
    public userName: string,
    public description: string,
    public createdDate: Date,
    public completedDate: Date,
    public isCompleted: boolean
  ) { }

}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos: Todo[];
  successMessage = '';
  errorMessage = '';
  // [
  //   new Todo(1, 'Grocery list, a, b, c.', false, new Date()),
  //   new Todo(1, 'Places to visit', false, new Date()),
  //   new Todo(1, 'Madagascar, Maldives, a, b, c.', false, new Date()),
  //   new Todo(1, 'Fav Laptops', true, new Date())
  // ];


  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.GetAll('abidzaidi').subscribe(
      response => {
        this.todos = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateTodo(id) {
    this.router.navigate(['todo', id]);
  }

  deleteTodo(id) {
    this.todoService.DeleteTodo('abidzaidi', id).subscribe(
      response => {
        console.log(response);
        this.successMessage = 'Todo Sucessfully deleted';
        this.getTodos();
      },
      error => {
        console.log(error);
        this.errorMessage = 'An error occurred while deleting Todo';
      }
    );
  }

  addTodo() {
    this.router.navigate(['todo', -1]);
  }

}
