package com.in28minutes.rest.webservices.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.in28minutes.rest.webservices.bean.Todo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoController { 
	
	@Autowired
	private TodoService todoHardCodedService ;
	
	@GetMapping("/{username}/todos")
	public List<Todo> retrieveAll(@PathVariable String username){ 
		return todoHardCodedService.findAll();
	}
	
	@DeleteMapping("/{username}/todos/{id}") 
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable Integer id){
		Todo todo = todoHardCodedService.deleteById(id); 
		
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	} 
	
	@GetMapping("/{username}/todos/{id}")
	public Todo findTodo(@PathVariable Integer id) {
		return todoHardCodedService.findById(id);
	}
	
	@GetMapping("/todos/{id}") 
	public Todo findTodoById(@PathVariable Integer id) {
		return todoHardCodedService.findById(id);
	} 
	
	@PutMapping("/{username}/todos/{id}") 
	public Todo updateTodo(@PathVariable String username,@PathVariable Integer id, @RequestBody Todo todo) {
		Todo updatedTodo = todoHardCodedService.save(todo); 
		return updatedTodo; 
			
	}
	
	@PostMapping("/{username}/todos")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @RequestBody Todo todo) {
		Todo createdTodo = todoHardCodedService.save(todo);
		createdTodo.setUsername(username);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("{id}").buildAndExpand(createdTodo.getId()).toUri(); 
		
		return  ResponseEntity.created(uri).build();

	}
}
