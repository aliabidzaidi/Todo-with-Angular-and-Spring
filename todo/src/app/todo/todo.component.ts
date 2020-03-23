import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Todo } from '../list-todo/list-todo.component';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(0, '', '', new Date, new Date, false);
    this.todoService.GetTodo('abidzaidi', this.id)
      .subscribe(
        data => {
          console.log(data);
          this.todo = data;
        }
      )
  }

  saveTodo() {
    console.log('save called');
  }

}
