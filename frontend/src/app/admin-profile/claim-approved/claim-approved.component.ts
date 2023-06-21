import {Component, Inject, OnInit} from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, catchError, of } from 'rxjs';
import { ClaimService } from 'src/app/services/claim.service';
import { sharedService } from 'src/app/services/sharedService.service';

@Component({
  selector: 'app-claim-approved',
  templateUrl: './claim-approved.component.html',
  styleUrls: ['./claim-approved.component.css']
})
export class ClaimApprovedComponent implements OnInit {

  form ;
  maxLimitSum:number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
   private claimsService: ClaimService, 
   private dialog: MatDialog, 
   private tostrService: ToastrService,
   private router: Router,
   private sharedService: sharedService ) { 
    
  }

  ngOnInit(): void {
    this.maxLimitSum = this.data.maxLimit;
    this.form = new FormGroup({
      paidDate: new FormControl (""),
      paidSum: new FormControl ("", Validators.required),
      description: new FormControl ("")
  });
  }

  changePaidSum(){
    if(+this.form.controls.paidSum.value>this.maxLimitSum || this.form.controls.paidSum==''){
      this.form.controls.paidSum.setErrors({'incorrect': true});
    }
    else{
      this.form.controls.paidSum.setErrors(null);
    }
  }

  approveClaim(){
    this.form.controls.paidDate.setValue(new Date());
    this.sharedService.isLoading(true);
    this.claimsService.updateClaimStatus(this.form.value, this.data.claimData.id).pipe(
      catchError(err => {
        if(err.status !== 200){
          this.sharedService.isLoading(false);
          this.tostrService.error(err.error);
          return EMPTY
        }
        else{
          return of(err);
        }
      })
    )
    .subscribe((res ) =>{
      this.sharedService.isLoading(false);
      this.tostrService.success(res.error.text)
      this.dialog.closeAll();
      this.router.navigate(['/admin-claims']);

    })
  }

}
