import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admin-page-claims',
  templateUrl: './admin-page-claims.component.html',
  styleUrls: ['./admin-page-claims.component.css']
})
export class AdminPageClaimsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'egn', 'claimID'];

  ELEMENT_DATA  = [
   {position: 1, name: 'Мария Иванова', egn: '3511178024 ', claimID: '52520256532'},
   {position: 2, name: 'Гери Христозова', egn: '0249252777 ', claimID: '875258632'},
   {position: 3, name: 'Ина Митева', egn: '8009072388 ', claimID: '8520586320'},
   {position: 4, name: 'Валери Георгиев', egn: '9010102644 ', claimID: '754210125'},
   {position: 5, name: 'Борис Димов', egn: '0311130692 ', claimID: '5205320'},
   {position: 6, name: 'Наталия Йорданова', egn: '0602077699 ', claimID: '75421012'},
   {position: 7, name: 'Атанас Атанасов', egn: '6502013562 ', claimID: '754204521'},
   {position: 8, name: 'Мартин Михов', egn: '3012097438 ', claimID: '85632520'},
   {position: 9, name: 'Ивайло Димитров', egn: '5011262151 ', claimID: '583205520'},
   {position: 10, name: 'Цветомир Марков', egn: '9711098992 ', claimID: '54210124512'}
 ];

 @ViewChild(MatPaginator) paginator!: MatPaginator;
 dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);


 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
 }

  constructor() { }

  ngOnInit(): void {
  }

  goToDetails(claim:any){
    console.log(claim)
  }

}
