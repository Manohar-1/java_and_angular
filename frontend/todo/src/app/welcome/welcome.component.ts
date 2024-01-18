import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports:[CommonModule,FormsModule,RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message' 
  messageFromService = ''
  name = ''
  constructor(private route:ActivatedRoute, private service:WelcomeDataService) {

  }
  ngOnInit() {      
    this.name = this.route.snapshot.params['name'];
  } 

  getWelcomeMessage(){
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe( 
       response => this.handleSuccessfulResponse(response),
       error => this.handleErrorResponse(error)
    ); 
    // console.log("Last line code");
  } 

  getWelcomeMessageWithPathVariable(){
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
       response => this.handleSuccessfulResponse(response),
       error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response:any){
    this.messageFromService = response.message;
  }

  handleErrorResponse(error:any){
    console.log(error);  
    // console.log(error.error);
    // console.log(error.error.message);
    this.messageFromService = error.error.message;
  }
} 


