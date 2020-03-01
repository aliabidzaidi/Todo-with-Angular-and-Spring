import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos = [
    {name: 'Grocery', description: 'Grocery list, a, b, c.'},
    {name: 'Places to visit', description: 'Madagascar, Maldives'},
    {name: 'Fav Laptops', description: 'Dell, HP'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
