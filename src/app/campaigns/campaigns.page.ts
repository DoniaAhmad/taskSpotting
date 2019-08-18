import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: ['./campaigns.page.scss'],
})
export class CampaignsPage implements OnInit {
  slideOpts = {
    effect: 'flip'
  };
  constructor(private router : Router) { }

  ngOnInit() {
  }
  details(){
    this.router.navigateByUrl('/campaign-details');
  }
}
