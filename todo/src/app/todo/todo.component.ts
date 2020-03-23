import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Todo } from '../list-todo/list-todo.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', '', new Date(), new Date(), false);

    if (this.id != -1) {
      this.todoService.GetTodo('abidzaidi', this.id).subscribe(data => {
        console.log(data);
        this.todo = data;
      });
    }

  }

  saveTodo() {
    if (this.id === -1) {
      console.log(this.todo);
      this.todoService.AddTodo('abidzaidi', this.todo);
    }
    else {

      this.todoService
        .UpdateTodo('abidzaidi', this.id, this.todo)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['todos']);
          }
        );
    }
  }

}
