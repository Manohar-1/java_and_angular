import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';



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

  constructor(private router: Router, public hardcodedAuthenticationService:HardcodedAuthenticationService) {}

  ngOnInit() {}

  handleLogin() {
    // if (this.username === 'manohar' && this.password === 'manohar123') {
    if (this.hardcodedAuthenticationService.authenticate(this.username,this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome',this.username]);
    } else {
      this.invalidLogin = true;
    }
    console.log(this.invalidLogin);
  }
}
