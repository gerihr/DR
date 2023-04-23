import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimService } from 'src/app/services/claim.service';
import { ClaimAnswerComponent } from '../claim-answer/claim-answer.component';
import { ClaimApprovedComponent } from '../claim-approved/claim-approved.component';

@Component({
  selector: 'app-admin-claim-details',
  templateUrl: './admin-claim-details.component.html',
  styleUrls: ['./admin-claim-details.component.css']
})
export class AdminClaimDetailsComponent {

  claimData:any;
  claimId:any;
  constructor(public dialog: MatDialog, private route: ActivatedRoute,  private claimsService: ClaimService) { 
  }

  ngOnInit(){
    // let claimId=this.claimsService.getCurrentClaimdId();
    // if(claimId!==undefined){
    //   this.claimsService.getClaimById(claimId).subscribe(res=>{
    //     this.claimData=res;
    //     console.log(this.claimData)
    //   })
    // }
    // else{
    //   this.router.navigate(['/admin-claims'])
    // }

    this.route.paramMap.subscribe((params) => {
      this.claimId = params.get('id');
    });
    this.claimsService.getClaimById(this.claimId).subscribe(res=>{
        this.claimData=res;
        console.log(this.claimData)
      })
  }

  sendAnswerDeclined(){
       this.dialog.open(ClaimAnswerComponent, {
        data: this.claimData,
        width: '600px',
        height:'300px'
      });
    }
  sendAnswerApproved(){
    this.dialog.open(ClaimApprovedComponent, {
      data: this.claimData
    });
  }

}
