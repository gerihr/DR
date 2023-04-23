import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-my-claim-details',
  templateUrl: './my-claim-details.component.html',
  styleUrls: ['./my-claim-details.component.css']
})
export class MyClaimDetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private claimsService:ClaimService) { }

  currentIndex :number = 2;
  encodedEgn: any;
  claimsDataOpened:any;
  claimdDataClosed:any;

  ngOnInit(): void {
   this.route.paramMap.subscribe((params) => {
      this.encodedEgn = params.get('id');
    });
    this.claimsService.getClaimByEgn(atob(this.encodedEgn)).subscribe((res: any) =>{
      this.claimsDataOpened = res.filter((c:any) => c.paidDate === null);
      this.claimdDataClosed = res.filter((c:any) => c.paidDate !== null);
      console.log(this.claimdDataClosed);
      console.log(this.claimsDataOpened);
    })
  }

  newClaim(){
    this.router.navigate(['/new-claim']);
  }

  activateTab(index:number){
    this.currentIndex = index
  }

}
