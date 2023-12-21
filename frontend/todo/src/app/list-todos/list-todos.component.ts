import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


export class Todo{
  constructor( 
    public id:number,
    public description:string,
    public done: boolean,
    public targetDate: Date
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
 
  todos = [
    new Todo(1,'Learn To Dance',false,new Date()),
    new Todo(2,'Become an expert in Angular',false,new Date()),
    new Todo(3,'Visit America',false,new Date()),
    new Todo(4,'Learn To fight',false,new Date()),
  ]
  todo = {
    id:1,
    description:'Learn to Dance'
  }

  ngOnInit(): void {
     
  }

}
