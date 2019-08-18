import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})

export class RatePage implements OnInit {

  counter = 0;

  constructor(private router : Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigateByUrl('/range');
  }
  next(){
    this.router.navigateByUrl('/post-image');
  }
  toggle(value){
     this.counter = value;
  }
}
