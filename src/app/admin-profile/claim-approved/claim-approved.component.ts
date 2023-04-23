import {Component, Inject, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-claim-approved',
  templateUrl: './claim-approved.component.html',
  styleUrls: ['./claim-approved.component.css']
})
export class ClaimApprovedComponent implements OnInit {

  form:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private claimsService: ClaimService, private dialog: MatDialog ) { 
    
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      paidDate: new FormControl (""),
      paidSum: new FormControl ("", Validators.required),
      description: new FormControl ("")
  });
  }

  approveClaim(){
    this.form.controls.paidDate.setValue(new Date());
    this.claimsService.updateClaimStatus(this.form.value, this.data.id).subscribe(() =>{
      this.dialog.closeAll();
    })
  }

}
