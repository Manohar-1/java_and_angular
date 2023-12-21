import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message'
  name = ''
  constructor(private route:ActivatedRoute) {}
  ngOnInit() {  

    console.log(this.message); 
    this.name = this.route.snapshot.params['name'];
  }
}
