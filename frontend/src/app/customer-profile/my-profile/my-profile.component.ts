import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, catchError, delay, filter, of, tap } from 'rxjs';
import { PolicyService } from 'src/app/services/policy.service';
import { sharedService } from 'src/app/services/sharedService.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit, AfterViewInit {

  personalData : any;
  isEditing = false;
  titular: any;
  children : any;
  titularHasPolicy: any;
  titularData ;

  constructor(private router: Router,private tostrService: ToastrService, private policyService: PolicyService, public sharedService: sharedService) { }

  ngOnInit(): void {
    const form = new FormGroup({
      name: new FormControl('name'),
      phoneNumber: new FormControl('phoneNumber'),
      egn: new FormControl('egn'),
      address: new FormControl('address'),
      kids: new FormControl('kids')
    });
  }

  ngAfterViewInit(){
    this.getPolicyList();
  }
  onEditing(){
    this.isEditing=!this.isEditing
  }

  toMyClaims(egn ){
    this.router.navigate(['/my-claims',  btoa(egn) ]);
  }

  getPolicyList(){
    let egn : any = sessionStorage.getItem("InsurerData");
    this.policyService.getPoliciesByEgn(egn).pipe(
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
    .subscribe(
      (res ) => {
        this.titularData = res.filter((p ) => p.insuredId.egn === egn);
        this.children = res.filter((p ) => p.insuredId.egn !== egn);
        this.sharedService.setUserClaimsInformation(res);

        if(this.titularData.length==0){
          this.titularHasPolicy = false;
          this.policyService.getPolicyTitular(egn).pipe(
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
          .subscribe(
            (res ) => {
            this.titular = res;
            this.sharedService.isLoading(false);
            }
          )
        }
        else{
          this.titularHasPolicy = true;
          this.titularData=this.titularData[0]
          this.titular = this.titularData.insuredId;
          this.sharedService.isLoading(false);
        }
      }
    )
  }


}
