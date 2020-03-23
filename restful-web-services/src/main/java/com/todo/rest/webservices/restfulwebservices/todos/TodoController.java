package com.todo.rest.webservices.restfulwebservices.todos;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin("http://localhost:4200")
@RestController
public class TodoController {
	
	@Autowired
	TodoService todoService;

	@GetMapping("/users/{username}/todos")
	public List<Todo> Get(@PathVariable String username){
		return todoService.GetAll();
	}
	
	@GetMapping("/users/{username}/todo/{id}")
	public Todo GetTodo(@PathVariable int id){
		Todo todo = todoService.FindById(id);
		return todo;
	}
	
	@DeleteMapping("/users/{username}/todo/{id}")
	public ResponseEntity<Todo> Delete(@PathVariable String username, @PathVariable int id){
		Todo todo = todoService.DeleteById(id);
		
		if(todo != null)
			return ResponseEntity.noContent().build();
		
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping("/users/{username}/todo/{id}")
	public ResponseEntity<Todo> Update(@PathVariable String username, @PathVariable int id, @RequestBody Todo todo){
		Todo updatedTodo = todoService.SaveTodo(todo);
		
		return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);
	}
	
	@PostMapping("/users/{username}/todo")
	public ResponseEntity<Todo> Add(@PathVariable String username, @RequestBody Todo todo){
		System.out.println(todo.toString());
		Todo createdTodo = todoService.SaveTodo(todo);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri()
					.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}
