import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { sharedService } from 'src/app/services/sharedService.service';
import { CustoValidator } from 'src/app/services/customValidator';
import { Cities } from 'src/app/services/bulgaria-towns';

@Component({
  selector: 'app-insurer-data',
  templateUrl: './insurer-data.component.html',
  styleUrls: ['./insurer-data.component.css'],
})
export class InsurerDataComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private sharedService: sharedService, 
    public cities: Cities,
    private customValidator: CustoValidator) {
  }
  
  form:any;
  isAdult:any=false;
  ngOnInit(): void {
    this.form = new FormGroup({
      egn: new FormControl ("", {validators:[Validators.required, CustoValidator.personalId()]}),
      name: new FormControl ("", Validators.required),
      middleName: new FormControl ("", Validators.required),
      lastName: new FormControl ("",Validators.required),
      city: new FormControl ("", Validators.required),
      address: new FormControl ("", Validators.required),
      phoneNumber: new FormControl ("", Validators.required),
      email: new FormControl ("", {validators:[Validators.required, Validators.email]})
  });

  console.log(this.cities.cities)
  
  }

  checkEGN(){
    
    if(this.form.controls.egn.status === "VALID"){
      if(this.sharedService.isAdult(this.form.controls.egn.value)<18){
        this.isAdult=false
      }
      else{
        this.isAdult=true
      }
    }
  }

  continue() {
    console.log(this.form.value)
    this.router.navigate(['/guardianData']);
  }
}
