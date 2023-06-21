import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, catchError, of } from 'rxjs';
import { ClaimService } from 'src/app/services/claim.service';
import { sharedService } from 'src/app/services/sharedService.service';

@Component({
  selector: 'app-claim-answer',
  templateUrl: './claim-answer.component.html',
  styleUrls: ['./claim-answer.component.css']
})
export class ClaimAnswerComponent implements OnInit {
  declined:boolean = false;
  form ;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private claimsService: ClaimService, 
  private dialog: MatDialog, 
  private router: Router,
  private tostrService: ToastrService,
  private sharedService: sharedService) { 
   
 }

  ngOnInit(): void {
    this.form = new FormGroup({
      paidDate: new FormControl (""),
      paidSum: new FormControl ("", Validators.required),
      description: new FormControl ("")
  });
  }

  sendDescription(){
    this.form.controls.paidDate.setValue(new Date());
    this.sharedService.isLoading(true);
    this.claimsService.updateClaimStatus(this.form.value, this.data.claimData.id)
    .pipe(
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
