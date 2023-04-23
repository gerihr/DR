import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustoValidator } from './customValidator';


@Injectable({
  providedIn: 'root',
})
export class FormService {
  claimForm:any;

  constructor(private formBuilder: FormBuilder) {}

  insurerForm = new FormGroup({
    egn: new FormControl ("", {validators:[Validators.required, CustoValidator.personalId()]}),
    name: new FormControl ("", Validators.required),
    middleName: new FormControl ("", Validators.required),
    lastName: new FormControl ("",Validators.required),
    city: new FormControl ("", Validators.required),
    address: new FormControl ("", Validators.required),
    phoneNumber: new FormControl ("", Validators.required),
    email: new FormControl ("", {validators:[Validators.required, Validators.email]})
  });
  
  guardianForm=new FormGroup({
    egn: new FormControl ("", {validators:[Validators.required, CustoValidator.personalId()]}),
    name: new FormControl ("", Validators.required),
    middleName: new FormControl ("", Validators.required),
    lastName: new FormControl ("",Validators.required),
    city: new FormControl ("", Validators.required),
    address: new FormControl ("", Validators.required),
    phoneNumber: new FormControl ("", Validators.required),
    email: new FormControl ("", {validators:[Validators.required, Validators.email]})
  });

  insuranceDates=new FormGroup({
    startDate: new FormControl ("", Validators.required),
    endDate: new FormControl (null , Validators.required)
  });

  additionalPack:any;
  packForm:any;



  getForm() {
    if (!this.claimForm) {
      this.claimForm = this.formBuilder.group({
      });
    }
    return this.claimForm;
  }

  setInsuranceForm(form:any){
  this.insurerForm.setValue(form)
  }
  getInsuranceForm(){
    return this.insurerForm
  }

  
}

