import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-claim-approved',
  templateUrl: './claim-approved.component.html',
  styleUrls: ['./claim-approved.component.css']
})
export class ClaimApprovedComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    
  }

  ngOnInit(): void {
    console.log(this.data)
  }

}
