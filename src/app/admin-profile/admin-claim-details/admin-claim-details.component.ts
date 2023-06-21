import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimService } from 'src/app/services/claim.service';
import { sharedService } from 'src/app/services/sharedService.service';
import { ClaimAnswerComponent } from '../claim-answer/claim-answer.component';
import { ClaimApprovedComponent } from '../claim-approved/claim-approved.component';
import { catchError, delay, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-claim-details',
  templateUrl: './admin-claim-details.component.html',
  styleUrls: ['./admin-claim-details.component.css']
})
export class AdminClaimDetailsComponent implements OnInit, AfterViewInit{

  claimData;
  claimId;
  maxLimit;
  file_store:any =[]
  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private claimsService: ClaimService, 
    private sharedService: sharedService,
    private toastrService: ToastrService) { 
  }


  ngOnInit(){
    this.route.paramMap.subscribe((params) => {
      this.claimId = params.get('id');
    });
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

  }

  ngAfterViewInit(){ 

    this.claimsService.getClaimById(this.claimId).pipe(
      delay(0),
      tap(()=> this.sharedService.isLoading(true)),
      catchError(err => {
        if(err.status !== 200){
          this.sharedService.isLoading(false);
          this.toastrService.error(err.error);
          return EMPTY
        }
        else{
          return of(err);
        }
        
      })
    ).subscribe((res:any )=>{
        this.claimData=res.claim;
        this.file_store=res.claim.files;
        this.maxLimit=res.maxLimitValue;
        this.sharedService.isLoading(false);   
      })
  }

  base64ToArrayBuffer(file:any ) {
    var binaryString = atob(file.base64);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

  sendAnswerDeclined(){
       this.dialog.open(ClaimAnswerComponent, {
        data: 
        {claimData: this.claimData,
        maxLimit: this.maxLimit},
        width: '600px',
        height:'300px'
      });
    }
  sendAnswerApproved(){
    this.dialog.open(ClaimApprovedComponent, {
      data: {claimData: this.claimData,
        maxLimit: this.maxLimit}
    });
  }

  previewFile(file:any ){
    let base64str=file.base64;
    var win  = window.open();
    window.document.write('<iframe src="' + base64str  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
  }

}
