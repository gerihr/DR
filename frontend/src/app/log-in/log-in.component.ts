import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { authService } from '../services/auth.service';
import { CustoValidator } from '../services/customValidator';
import { EMPTY, catchError, of } from 'rxjs';
import { sharedService } from '../services/sharedService.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router, private authService: authService,private tostrService: ToastrService, private sharedService: sharedService) { }

  show:boolean=false;
  form ;
  formAdmin 
  typesArray = ["админ", "потребител"];
  isFormShowed ;
  type ;

  ngOnInit(): void {
    this.isFormShowed = false;
    this.type=this.typesArray[1];
    this.form = new FormGroup({
      idNumber: new FormControl ("", {validators:[Validators.required, CustoValidator.personalId()]}),
      code: new FormControl ("", Validators.required)
  });

  this.formAdmin = new FormGroup({
    idNumber: new FormControl ("", {validators:[Validators.required]}),
    code: new FormControl ("", Validators.required)
});
  }

  showEGN(){
    this.show = !this.show;
    console.log(this.form)
  }

  setType(type ){
    this.type=type
  }

  showForm(){}

  toMyProfile(){
    let usedForm = this.type == 'потребител' ? this.form : this.formAdmin
    this.authService.login(usedForm.value).pipe(
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
    .subscribe((res )=>{
      if(res.type === 'insurer'){
        sessionStorage.setItem('UserType', "insurer"); 
        sessionStorage.setItem('InsurerData', res.idNumber)
         this.authService.isLogged(true);
         this.authService.adminCheck(false)
        this.router.navigate(['/my-profile']);
      }
      else if(res.type == 'admin'){
        sessionStorage.setItem('UserType', "admin"); 
         this.authService.isLogged(true);
         this.authService.adminCheck(true)
        this.router.navigate(['/admin-claims']);
      }
      else{
        this.router.navigate(['/error'])
      }
    })
  }

}
