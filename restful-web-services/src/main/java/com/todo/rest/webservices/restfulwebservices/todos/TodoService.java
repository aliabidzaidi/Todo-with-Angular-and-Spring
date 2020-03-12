package com.todo.rest.webservices.restfulwebservices.todos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoService {
	static List<Todo> TodoList = new ArrayList<Todo>();
	
	static {
		TodoList.add(new Todo(1, "abidzaidi", "Buy Grocery", new Date(), new Date(), false));
		TodoList.add(new Todo(2, "abidzaidi", "Wash Car", new Date(), new Date(), false));
		TodoList.add(new Todo(3, "abidzaidi", "Learn Swimming", new Date(), new Date(), false));
		TodoList.add(new Todo(4, "abidzaidi", "Feed Goldfish", new Date(), new Date(), true));
	}
	
	public List<Todo> GetAll(){
		return TodoList;
	}
}
