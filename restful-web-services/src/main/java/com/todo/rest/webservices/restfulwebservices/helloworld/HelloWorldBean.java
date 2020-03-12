package com.todo.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {
	private String Message;
	
	public HelloWorldBean(String message) {
		this.Message = message;
	}
	
	public String getMessage() {
		return Message;
	}

	public void setMessage(String message) {
		Message = message;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [Message=" + Message + "]";
	}
	
}
