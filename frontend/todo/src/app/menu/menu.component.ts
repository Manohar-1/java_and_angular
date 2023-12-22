import { Component, OnInit } from '@angular/core'; 
import { RouterModule } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  // userLoggedIn = false;

  constructor(public hardcodedAuthenticationService:HardcodedAuthenticationService){

  } 
  ngOnInit(): void {
    // this.userLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn(); 
    // console.log(this.userLoggedIn);
  }


}
