import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ValidatorService } from 'angular-iban';
import { AsyncSubject, EMPTY, Observable, catchError, delay, of, tap, throwError } from 'rxjs';
import { ClaimService } from 'src/app/services/claim.service';
import { CustoValidator } from 'src/app/services/customValidator';
import { enumsService } from 'src/app/services/enums.service';
import { sharedService } from 'src/app/services/sharedService.service';
import { SuccessfulClaimComponent } from '../successful-claim/successful-claim.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-claim',
  templateUrl: './new-claim.component.html',
  styleUrls: ['./new-claim.component.css']
})
export class NewClaimComponent implements OnInit, AfterViewInit {
  claimData: any;
  form ;
  categories ;
  types ;
  selectedFiles : any = [];
  userInformation  = [];

  constructor(public dialog: MatDialog, public claimsService:ClaimService,
    private enumsService: enumsService,
    private router: Router,
     private sharedService: sharedService) { }

  ngOnInit(): void {
    this.userInformation=[];
    this.form = new FormGroup({
      egn: new FormControl ("", {validators:[Validators.required, CustoValidator.personalId()]}),
      name: new FormControl ("", Validators.required),
      category: new FormControl ("", Validators.required),
      type: new FormControl ("", Validators.required),
      sum: new FormControl ("", Validators.required),
      iban: new FormControl ("", {validators:[Validators.required, ValidatorService.validateIban]}),
      claimDate: new FormControl ("", Validators.required),
      paidDate: new FormControl (""),
      paidSum: new FormControl (""),
      description: new FormControl (""),
      files: new FormControl("")
  });

  }

  ngAfterViewInit(){
    this.enumsService.getCategories().pipe(
      delay(0),
      tap(()=> this.sharedService.isLoading(true)),
      catchError(err => {
        if(err.status !== 200){
          this.sharedService.isLoading(false);
          return EMPTY
        }
        else{
          return of(err);
        }
      })
    )
    .subscribe(res=>{
      this.categories = res;
      this.sharedService.isLoading(false);
    })

    this.sharedService.userClaimsInformation$.subscribe((info ) =>{
        let information = info.map((x ) => x.insuredId);
        if(!information.length){
          this.userInformation.push(information);
        }
        else{
          this.userInformation = information;
        }
        console.log(this.userInformation);
    })
  }

  public toFilesBase64(files: any): Observable<any> {
    const result = new AsyncSubject<any>();
    let selectedFiles  = [];
    if (files?.length) {
      Object.keys(files)?.forEach(async (file, i) => {
        const reader = new FileReader();
        reader.readAsDataURL(files[i].file);
        reader.onload = (e) => {
          selectedFiles = selectedFiles?.filter((f ) => f?.name != files[i]?.file.name)
          selectedFiles.push({ name: files[i]?.file.name, base64:reader?.result as string, type:files[i].type})
          result.next(selectedFiles);
          if (files?.length === (i + 1)) {
            result.complete();
          }
        };
      });
      return result;
    } else {
      result.next([]);
      result.complete();
      return result;
    }
  }

  setUser(user ){
    this.form.controls.name.setValue(user.firstName + " " + user.lastName)
  }

  updatedFiles(event ){
    this.toFilesBase64(event.files).subscribe((res ) => {
      this.form.controls.files.value = res;
    });

    // this.form.controls.files.value = event.files
  }

  getTypes(index ){
    this.types = this.categories[index-1].typeList
  }

  sendNewClaim(){
    this.sharedService.isLoading(true);
    this.form.controls.claimDate.setValue(new Date())
    this.claimsService.newClaim(this.form.value).pipe(
      catchError(err => {
        if(err.status !== 200){
          this.sharedService.isLoading(false);
          this.dialog.open(SuccessfulClaimComponent,{
            data: {
            claimData: this.claimData,
            successful: false
          }});
          return EMPTY
        }
        else{
          return of(err);
        }
      })
    )
    .subscribe(
      ()=>{
        this.sharedService.isLoading(false);
        this.dialog.open(SuccessfulClaimComponent, {
          data: {
            claimData: this.claimData,
            successful: true
          }});
          this.router.navigate(['/my-profile']);
      }
    )

  }

}
