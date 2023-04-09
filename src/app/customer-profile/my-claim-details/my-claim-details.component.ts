import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-claim-details',
  templateUrl: './my-claim-details.component.html',
  styleUrls: ['./my-claim-details.component.css']
})
export class MyClaimDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  currentIndex :number = 2;

  ngOnInit(): void {
  }

  newClaim(){
    this.router.navigate(['/new-claim']);
  }

  activateTab(index:number){
    this.currentIndex = index
  }

}
