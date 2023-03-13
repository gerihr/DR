import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessfulClaimComponent } from '../successful-claim/successful-claim.component';

@Component({
  selector: 'app-new-claim',
  templateUrl: './new-claim.component.html',
  styleUrls: ['./new-claim.component.css']
})
export class NewClaimComponent implements OnInit {
  claimData: any

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  sendNewClaim(){
    this.dialog.open(SuccessfulClaimComponent, {
      data: this.claimData
    });
  }

}
