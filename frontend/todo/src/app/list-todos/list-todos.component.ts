import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoDataService } from '../service/data/todo-data.service';
import {  Router } from '@angular/router';


export class Todo{
  constructor( 
    public id:number,
    public username:string,
    public description:string,
    public targetDate: Date,
    public done: boolean
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit{
 
  todos:Todo[] = [];  
  message:string = "";

  constructor(private todoDataService:TodoDataService,private router:Router){

  }
  

  ngOnInit(): void {
     this.refreshTodos();
  } 

  refreshTodos(){
    this.todoDataService.retrieveAllTodoos("manohar").subscribe( 
      response =>{
        this.todos = response ;
        // console.log(response);  
      }
     ); 
  }

  deleteTodo(id:number){ 
    this.todoDataService.deleteTodo("manohar",id).subscribe( 
      response =>{        
          // console.log(response);
          this.message = `Deleted todo ${id} successfully`        
          this.refreshTodos();
      }
    ); 
    
  }

  navigateToTodoForm(id:number){
    console.log(`update todo ${id}`); 
    this.router.navigate(["manohar/todos",id]);
  } 

  addTodo(){
    this.router.navigate(['manohar/todos',-1]);
  }

}
