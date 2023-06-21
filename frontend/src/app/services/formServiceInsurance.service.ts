import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { CustoValidator } from './customValidator';


@Injectable({
  providedIn: 'root',
})
export class FormServiceInsurance {
  claimForm ;

  constructor(private formBuilder: FormBuilder) {}

  insuredForm = new FormGroup({
    egn: new FormControl ("", {validators:[Validators.required, CustoValidator.personalId()]}),
    firstName: new FormControl ("", Validators.required),
    middleName: new FormControl ("", Validators.required),
    lastName: new FormControl ("",Validators.required),
    city: new FormControl ("", Validators.required),
    address: new FormControl ("", Validators.required),
    phoneNumber: new FormControl ("", Validators.required),
    email: new FormControl ("", {validators:[Validators.required, Validators.email]})
  });
  
  insurerForm=new FormGroup({
    egn: new FormControl ("", {validators:[Validators.required, CustoValidator.personalId()]}),
    firstName: new FormControl ("", Validators.required),
    middleName: new FormControl ("", Validators.required),
    lastName: new FormControl ("",Validators.required),
    city: new FormControl ("", Validators.required),
    address: new FormControl ("", Validators.required),
    phoneNumber: new FormControl ("", Validators.required),
    email: new FormControl ("", {validators:[Validators.required, Validators.email]})
  });

  additionalPack ;

  policy= new FormGroup({
    startDate: new FormControl ("", Validators.required),
    endDate: new FormControl ("", Validators.required),
    dentalLimit: new FormControl ("", Validators.required),
    hospitalLimit: new FormControl ("", Validators.required),
    outOfHospitalLimit: new FormControl ("", Validators.required),
    healthGoodsLimit: new FormControl ("", Validators.required),
    price: new FormControl ("", Validators.required)
  })

  calculatePremiums(){
    let beginningPremiums = [
      {packType:"Комфорт", price: 25, dentalLimit: 100, hospitalLimit: 2500 , outOfHospitalLimit: 450, healthGoodsLimit: 100, index: 1 },
      {packType:"Плюс", price: 50, dentalLimit: 250, hospitalLimit: 4500 , outOfHospitalLimit: 600, healthGoodsLimit: 250, index: 2 },
      {packType:"Макс", price: 75, dentalLimit: 350, hospitalLimit: 5500 , outOfHospitalLimit: 800, healthGoodsLimit: 350, index: 3 }
    ];

    let priceChange  = {dentalLimit: 50, hospitalLimit: 500 , outOfHospitalLimit: 100, healthGoodsLimit: 75}
    let finalPremiums;
    if(this.additionalPack){
      let addedValue = priceChange[this.additionalPack]
      finalPremiums = beginningPremiums.map((ev ) => {
       return { ...ev, price: ev.price+(0.2* ev.price), [this.additionalPack]: ev[this.additionalPack]+addedValue}
      }
    );
    }

    else{
      finalPremiums=beginningPremiums
    }

    return finalPremiums;


    
  }



  getForm() {
    if (!this.claimForm) {
      this.claimForm = this.formBuilder.group({
        insured: this.insuredForm,
        insurer: this.insurerForm,
        policy: this.policy
      });
    }
    return this.claimForm;
  }

  setInsurerForm(form ){
  this.claimForm.controls.insurer.patchValue(form.value)
  }

  getInsurerForm(){
    return  this.claimForm.controls.insurer.value
  }

  setInsuredForm(form ){
    this.claimForm.controls.insured.patchValue(form.value)
    }
  
  getInsuredForm(){
      return  this.claimForm.controls.insured.value
  }

  setPolicyForm(form ){
    this.claimForm.controls.policy.patchValue(form.value)
    }
  
  getPolicyForm(){
      return this.claimForm.controls.policy
  }

  setAdditionalPack(pack ){
    this.additionalPack = pack;
  }

  getAdditionalPack(){
    return this.additionalPack;
  }

  
}

