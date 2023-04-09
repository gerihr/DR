import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successful-claim',
  templateUrl: './successful-claim.component.html',
  styleUrls: ['./successful-claim.component.css']
})
export class SuccessfulClaimComponent implements OnInit {
  successful: boolean = false;

  constructor( public dialogRef: MatDialogRef<SuccessfulClaimComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.successful=true
  }

  toMyClaims(){
    this.router.navigate(['/my-claims']);
    this.dialogRef.close()
  }


}
