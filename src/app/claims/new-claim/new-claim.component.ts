import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ValidatorService } from 'angular-iban';
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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      egn: new FormControl ("", {validators:[Validators.required, CustoValidator.personalId()]}),
      iban: new FormControl ("", {validators:[Validators.required, ValidatorService.validateIban]})
  });

  }

  sendNewClaim(){
    this.dialog.open(SuccessfulClaimComponent, {
      data: this.claimData
    });
  }

}
