import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.page.html',
  styleUrls: ['./post-image.page.scss'],
})
export class PostImagePage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigateByUrl('/rate');
  }
  next(){
    this.router.navigateByUrl('/video');
  }
}
