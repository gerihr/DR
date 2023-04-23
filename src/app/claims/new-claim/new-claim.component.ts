import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ValidatorService } from 'angular-iban';
import { catchError, of, throwError } from 'rxjs';
import { ClaimService } from 'src/app/services/claim.service';
import { CustoValidator } from 'src/app/services/customValidator';
import { SuccessfulClaimComponent } from '../successful-claim/successful-claim.component';

@Component({
  selector: 'app-new-claim',
  templateUrl: './new-claim.component.html',
  styleUrls: ['./new-claim.component.css']
})
export class NewClaimComponent implements OnInit {
  claimData: any;
  form:any;

  constructor(public dialog: MatDialog, public claimsService:ClaimService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      egn: new FormControl ("", {validators:[Validators.required, CustoValidator.personalId()]}),
      name: new FormControl ("", Validators.required),
      category: new FormControl ("", Validators.required),
      type: new FormControl ("", Validators.required),
      sum: new FormControl ("", Validators.required),
      iban: new FormControl ("", {validators:[Validators.required, ValidatorService.validateIban]}),
      claimDate: new FormControl ("", Validators.required),
      paidDate: new FormControl (""),
      paidSum: new FormControl (""),
      description: new FormControl ("")
  });

  }

  sendNewClaim(){
    this.form.controls.claimDate.setValue(new Date())
    this.claimsService.newClaim(this.form.value).pipe(
      catchError(err => {
        if(err.status){
          this.dialog.open(SuccessfulClaimComponent,{
            data: {
            claimData: this.claimData,
            successful: false
          }});
        }
        return of(err);
      })
    )
    .subscribe(
      ()=>{
        this.dialog.open(SuccessfulClaimComponent, {
          data: {
            claimData: this.claimData,
            successful: true
          }});
      }
    )

  }

}
