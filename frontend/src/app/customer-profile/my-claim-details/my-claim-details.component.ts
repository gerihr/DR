import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, catchError, delay, of, tap } from 'rxjs';
import { PreviewFileComponent } from 'src/app/preview-file/preview-file.component';
import { ClaimService } from 'src/app/services/claim.service';
import { sharedService } from 'src/app/services/sharedService.service';

@Component({
  selector: 'app-my-claim-details',
  templateUrl: './my-claim-details.component.html',
  styleUrls: ['./my-claim-details.component.css']
})
export class MyClaimDetailsComponent implements AfterViewInit {

  constructor(private router: Router, private route: ActivatedRoute,private tostrService: ToastrService, private claimsService:ClaimService, private sharedService: sharedService, private dialog: MatDialog) { }

  currentIndex :number = 2;
  encodedEgn: any;
  claimsDataOpened ;
  claimdDataClosed ;

  ngAfterViewInit(): void {
   this.route.paramMap.subscribe((params) => {
      this.encodedEgn = params.get('id');
    });
    this.claimsService.getClaimByEgn(atob(this.encodedEgn)).pipe(
      delay(0),
      tap(()=> this.sharedService.isLoading(true)),
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
    .subscribe((res: any) =>{
      this.claimsDataOpened = res.filter((c ) => c.paidDate === null);
      this.claimdDataClosed = res.filter((c ) => c.paidDate !== null);
      this.sharedService.isLoading(false);
    })
  }

  newClaim(){
    this.router.navigate(['/my-new-claim']);
  }

  activateTab(index:number){
    this.currentIndex = index
  }

}
