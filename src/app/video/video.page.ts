import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigateByUrl('/post-image');
  }
  next(){
    this.router.navigateByUrl('/view');
  }
}
