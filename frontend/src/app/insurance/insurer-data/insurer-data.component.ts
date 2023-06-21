import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { sharedService } from 'src/app/services/sharedService.service';
import { CustoValidator } from 'src/app/services/customValidator';
import { Cities } from 'src/app/services/bulgaria-towns';
import { FormServiceInsurance } from 'src/app/services/formServiceInsurance.service';

@Component({
  selector: 'app-insurer-data',
  templateUrl: './insurer-data.component.html',
  styleUrls: ['./insurer-data.component.css'],
})
export class InsurerDataComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private sharedService: sharedService, 
    public cities: Cities,
    private formServiceInsurance: FormServiceInsurance,
    private customValidator: CustoValidator) {
  }
  
  form ;
  isAdult =false;
  ngOnInit(): void {
    this.formServiceInsurance.getForm();
    this.form = new FormGroup({
      egn: new FormControl ("", {validators:[Validators.required, CustoValidator.personalId()]}),
      firstName: new FormControl ("", Validators.required),
      middleName: new FormControl ("", Validators.required),
      lastName: new FormControl ("",Validators.required),
      city: new FormControl ("", Validators.required),
      address: new FormControl ("", Validators.required),
      phoneNumber: new FormControl ("", Validators.required),
      email: new FormControl ("", {validators:[Validators.required, Validators.email]})
  });
  
  }

  checkEGN(){
    if(this.form.controls.egn.status === "VALID"){
      if(this.sharedService.isAdult(this.form.controls.egn.value)<18){
        this.isAdult=false;
        this.removeValidators();
      }
      else{
        this.isAdult=true;
        this.addValidators();
      }
    }
  }

  addValidators(){
    this.form.get('email').setValidators([Validators.required,Validators.email]);
    this.form.get('email').updateValueAndValidity(); 
    
    this.form.get('phoneNumber').setValidators(Validators.required);
    this.form.get('phoneNumber').updateValueAndValidity(); 
    
    this.form.get('address').setValidators(Validators.required);
    this.form.get('address').updateValueAndValidity();

    this.form.get('city').setValidators(Validators.required);
    this.form.get('city').updateValueAndValidity();
  }

  removeValidators(){
    this.form.get('email').clearValidators();
    this.form.get('email').updateValueAndValidity(); 
    
    this.form.get('phoneNumber').clearValidators();
    this.form.get('phoneNumber').updateValueAndValidity(); 
    
    this.form.get('address').clearValidators();
    this.form.get('address').updateValueAndValidity();

    this.form.get('city').clearValidators();
    this.form.get('city').updateValueAndValidity();
  }

  continue() {
    if(this.form.status=='VALID'){
      if(this.isAdult==true){
        this.formServiceInsurance.setInsuredForm(this.form);
        this.formServiceInsurance.setInsurerForm(this.form);
        this.router.navigate(['/start-insurance']);
      }
      else{
        this.formServiceInsurance.setInsuredForm(this.form);
        this.router.navigate(['/guardianData']);
      }
    }
  }
}
