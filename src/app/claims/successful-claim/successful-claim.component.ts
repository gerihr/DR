import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-successful-claim',
  templateUrl: './successful-claim.component.html',
  styleUrls: ['./successful-claim.component.css']
})
export class SuccessfulClaimComponent implements OnInit {
  successful: boolean = false;

  constructor( public dialogRef: MatDialogRef<SuccessfulClaimComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.successful=false
  }


}
