package com.todo.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//Spring Controller Annotation
@RestController 
public class HelloWorldController {
	
	//GET METHOD
	//URI /hello-world
	//Method Return Hello World
	@RequestMapping(method=RequestMethod.GET, path="/hello-world")
	public String HelloWorld() {
		return "Hello World";
	}
	
	@RequestMapping(method=RequestMethod.GET, path="/bean")
	public HelloWorldBean GetBean() {
		return new HelloWorldBean("Hello Human!");
	}
	
	
	@GetMapping(path="/bean/path/{name}")
	public HelloWorldBean GetBean(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello Human, I know your name %s", name));
	}
	

}
