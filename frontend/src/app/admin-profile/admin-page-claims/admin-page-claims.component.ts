import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, catchError, delay, of, tap } from 'rxjs';
import { ClaimService } from 'src/app/services/claim.service';
import { sharedService } from 'src/app/services/sharedService.service';

@Component({
  selector: 'app-admin-page-claims',
  templateUrl: './admin-page-claims.component.html',
  styleUrls: ['./admin-page-claims.component.css']
})
export class AdminPageClaimsComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'egn', 'claimID'];

  ELEMENT_DATA  = [];

 @ViewChild(MatPaginator) paginator!: MatPaginator;
 dataSource ;


  constructor(private claimsService:ClaimService, private router: Router, private sharedService: sharedService, private tostrService: ToastrService) { }

  ngAfterViewInit(): void {
    this.claimsService.getClaims().pipe(
      delay(0),
      tap(()=> this.sharedService.isLoading(true)),
      catchError(err => {
        if(err.status !== 200){
          this.sharedService.isLoading(false);
          this.tostrService.error(err.error);
          this.router.navigate(['/error'])
          return EMPTY
        }
        else{
          return of(err);
        }
      })
    )
    .subscribe((res )=> {
      this.ELEMENT_DATA = res.filter((c )=> c.paidDate==null);
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.sharedService.isLoading(false);   

    })
  }

  goToDetails(claim ){
    // this.claimsService.setCurrentClaimdId(claim.id);
    this.router.navigate(['/admin-claim-details', claim.id]);
  }

}
