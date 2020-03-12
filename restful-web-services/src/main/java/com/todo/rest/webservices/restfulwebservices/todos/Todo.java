package com.todo.rest.webservices.restfulwebservices.todos;

import java.util.Date;

public class Todo {
	private int Id;
	private String UserName;
	private String Description;
	private Date CreatedDate;
	private Date CompletedDate;
	private boolean IsCompleted;
	
	public Todo() {}
	
	public Todo(int id, String userName, String description, Date createdDate, Date completedDate,
			boolean isCompleted) {
		super();
		Id = id;
		UserName = userName;
		Description = description;
		CreatedDate = createdDate;
		CompletedDate = completedDate;
		IsCompleted = isCompleted;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getUserName() {
		return UserName;
	}

	public void setUserName(String userName) {
		UserName = userName;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	public Date getCreatedDate() {
		return CreatedDate;
	}

	public void setCreatedDate(Date createdDate) {
		CreatedDate = createdDate;
	}

	public Date getCompletedDate() {
		return CompletedDate;
	}

	public void setCompletedDate(Date completedDate) {
		CompletedDate = completedDate;
	}

	public boolean isIsCompleted() {
		return IsCompleted;
	}

	public void setIsCompleted(boolean isCompleted) {
		IsCompleted = isCompleted;
	}

	@Override
	public String toString() {
		return "Todo [Id=" + Id + ", UserName=" + UserName + ", Description=" + Description + ", CreatedDate="
				+ CreatedDate + ", CompletedDate=" + CompletedDate + ", IsCompleted=" + IsCompleted + "]";
	}
	
	
}
