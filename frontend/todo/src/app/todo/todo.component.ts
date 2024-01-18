import { AfterViewInit, Component,ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit,AfterViewInit{  
  
  id:number=0;

  todo:Todo ={id:0,username:'',description:'',targetDate:new Date(),done:false};


  constructor(private todoService:TodoDataService,private route:ActivatedRoute,private router:Router){

  }
  
  @ViewChild('myInput') myInputRef: ElementRef | null = null;
  ngAfterViewInit(): void { 
    // console.log(this.myInputRef)
    if (this.myInputRef) {
      this.myInputRef.nativeElement.focus();
    }    
  }

  ngOnInit(): void { 
    this.id = +this.route.snapshot.params['id']; 
    console.log(this.id);
    if(this.id!=-1){ 
      this.todoService.findTodoById('manohar',this.id).subscribe( 
        response => {
          this.todo = response
        }
      ); 
    }
  }

  saveTodo(){ 
    

    if(this.id == -1){ 
      this.todoService.createTodo('manohar',this.todo).subscribe(
        response =>{ 
          this.router.navigate(["manohar/todos"])
        }
      );
    }else{ 
      
      this.todoService.updateTodo(this.todo.username,this.todo.id,this.todo).subscribe(
        response =>{
          this.todo = response; 
          console.log(response); 
          this.router.navigate(["manohar/todos"])
        }
      );
    }

  }

}
