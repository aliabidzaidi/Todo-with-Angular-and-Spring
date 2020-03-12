package com.todo.rest.webservices.restfulwebservices.todos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:4200")
@RestController
public class TodoController {
	
	@Autowired
	TodoService todoService;

	@GetMapping("/users/{username}/todos")
	public List<Todo> Get(@PathVariable String username){
		return todoService.GetAll();
	}
	
}
