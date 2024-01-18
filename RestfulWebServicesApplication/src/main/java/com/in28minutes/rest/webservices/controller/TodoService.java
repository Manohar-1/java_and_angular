package com.in28minutes.rest.webservices.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.in28minutes.rest.webservices.bean.Todo;

@Service
public class TodoService {
	
	private static List<Todo> todos = new ArrayList<>();  
	private static int counterId=0;
	
	static {
		todos.add(new Todo(++counterId,"manohar","Learn to Fight",new Date())); 
		todos.add(new Todo(++counterId,"manohar","Learn to Dance",new Date())); 
		todos.add(new Todo(++counterId,"manohar","Learn Gymnastics",new Date()));
	}
	
	public List<Todo> findAll(){ 
		return todos;
	}
	
	public Todo deleteById(int id) {
		Todo todo = findById(id); 
		if(todos.remove(todo)) { 
			
			return todo;
		}
		return null;
	}

	public Todo findById(int id) {
		for(Todo todo: todos) {
			if(todo.getId()==id) {
				return todo;
			}
			
		}
		return null;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId()==-1 || todo.getId()==0) { 
			todo.setId(++counterId);
			todos.add(todo); 
		}else {
			deleteById(todo.getId());  
			todos.add(todo);
		}
		return todo;
	}
	
	
}
