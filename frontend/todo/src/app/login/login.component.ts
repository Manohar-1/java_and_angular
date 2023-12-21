import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  username = 'manohar';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  handleLogin() {
    if (this.username === 'manohar' && this.password === 'manohar123') {
      this.invalidLogin = false;

      //Redirect to Welcome Page
      this.router.navigate(['welcome',this.username]);
    } else {
      this.invalidLogin = true;
    }
  }
}
