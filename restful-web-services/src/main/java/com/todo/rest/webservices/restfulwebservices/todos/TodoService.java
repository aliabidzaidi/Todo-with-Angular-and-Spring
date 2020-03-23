package com.todo.rest.webservices.restfulwebservices.todos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoService {
	static List<Todo> TodoList = new ArrayList<Todo>();
	static int _idCounter;
	
	static {
		TodoList.add(new Todo(1, "abidzaidi", "Buy Grocery", new Date(), new Date(), false));
		TodoList.add(new Todo(2, "abidzaidi", "Wash Car", new Date(), new Date(), false));
		TodoList.add(new Todo(3, "abidzaidi", "Learn Swimming", new Date(), new Date(), false));
		TodoList.add(new Todo(4, "abidzaidi", "Feed Goldfish", new Date(), new Date(), true));
		_idCounter = 5;
	}
	
	public List<Todo> GetAll(){
		return TodoList;
	}
	
	public Todo DeleteById(int id) {
		Todo todo = this.FindById(id);
		
		if(todo != null) {
			TodoList.remove(todo);
			return todo;
		}
		return null;
	}
	
	public Todo FindById(int id) {
		for(Todo todo:TodoList) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
	public Todo SaveTodo(Todo todo) {
		if(todo.getId() <= 0) {
			todo.setId(++_idCounter);
		}
		else {
			DeleteById(todo.getId());
		}
		TodoList.add(todo);
		
		return todo;
	}
}
