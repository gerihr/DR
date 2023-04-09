import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ClaimAnswerComponent } from '../claim-answer/claim-answer.component';

@Component({
  selector: 'app-admin-claim-details',
  templateUrl: './admin-claim-details.component.html',
  styleUrls: ['./admin-claim-details.component.css']
})
export class AdminClaimDetailsComponent {

  constructor(  public dialog: MatDialog) { }
  sendAnswer(){
      const dialogRef = this.dialog.open(ClaimAnswerComponent, {
        data: {name: 'Гери', egn: '004931555'},
        width: '600px',
        height:'300px'
      });
    }

}
