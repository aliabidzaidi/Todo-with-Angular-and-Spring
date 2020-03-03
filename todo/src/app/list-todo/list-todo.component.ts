import { Component, OnInit } from '@angular/core';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }

}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos = [
    new Todo(1, 'Grocery list, a, b, c.', false, new Date()),
    new Todo(1, 'Places to visit', false, new Date()),
    new Todo(1, 'Madagascar, Maldives, a, b, c.', false, new Date()),
    new Todo(1, 'Fav Laptops', true, new Date())
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
