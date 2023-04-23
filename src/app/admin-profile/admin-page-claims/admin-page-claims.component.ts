import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-admin-page-claims',
  templateUrl: './admin-page-claims.component.html',
  styleUrls: ['./admin-page-claims.component.css']
})
export class AdminPageClaimsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'egn', 'claimID'];

  ELEMENT_DATA:any = [];

 @ViewChild(MatPaginator) paginator!: MatPaginator;
 dataSource:any;


  constructor(private claimsService:ClaimService, private router: Router) { }

  ngOnInit(): void {
    this.claimsService.getClaims().subscribe(res=> {
      this.ELEMENT_DATA = res;
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;

    })
  }

  goToDetails(claim:any){
    // this.claimsService.setCurrentClaimdId(claim.id);
    this.router.navigate(['/claim-details', claim.id]);
  }

}
