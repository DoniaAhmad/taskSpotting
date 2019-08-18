import { Component, OnInit,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
})
export class RangePage implements OnInit {
  value:number= 0;

  rate:string= "Bad";

  constructor(private router : Router, private elm: ElementRef) { 
  }

  ngOnInit() {
  }
  back(){
    this.router.navigateByUrl('/choose');
  }
  next(){
    this.router.navigateByUrl('/rate');
  }
  change(){
    if (this.value < 5) {
     this.rate = "Bad";
    }
    else if( this.value <=7){
     this.rate = "Good";
    }
    else if( this.value <=8){
      this.rate = "Very Good";
    }
    else if( this.value <=10){
      this.rate = "Excellent";
    }
    return this.rate;
  }
}
