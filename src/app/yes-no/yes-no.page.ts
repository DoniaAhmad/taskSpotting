import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.page.html',
  styleUrls: ['./yes-no.page.scss'],
})
export class YesNoPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  status:boolean = true;
  active(){
    this.status = !this.status;  
  }
  back(){
    this.router.navigateByUrl('/welcome');
  }
  next(){
    this.router.navigateByUrl('/choose');
  }
}