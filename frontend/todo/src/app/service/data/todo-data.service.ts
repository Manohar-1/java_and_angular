import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient:HttpClient,private router:Router) {  

  }

  retrieveAllTodoos(username:string){
    return this.httpClient.get<Todo[]>(`http://localhost:8088/${username}/todos`);
  }  

  deleteTodo(username:string,id:number){
    return this.httpClient.delete(`http://localhost:8088/${username}/todos/${id}`);
  }

  navigateToTodoForm(id:number){
    this.router.navigate(["todos",id]);
  } 

  findTodoById(username:string,id:number){
    return this.httpClient.get<Todo>(`http://localhost:8088/{username}/todos/${id}`);
  } 

  updateTodo(username:string,id:number,todo:Todo){
    return this.httpClient.put<Todo>(`http://localhost:8088/${username}/todos/${id}`,todo);
  } 


  createTodo(username:string,todo:Todo){
    return this.httpClient.post<Todo>(`http://localhost:8088/${username}/todos`,todo);
  }

  

  
}
