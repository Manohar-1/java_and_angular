import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  username = 'manohar'  
  password = '' 
  errorMessage = 'Invalid Credentials'  
  invalidLogin = false

  ngOnInit(): void {
    
  }

  handleLogin(){
    if(this.username==='manohar' && this.password==='manohar123'){
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
  }
}
