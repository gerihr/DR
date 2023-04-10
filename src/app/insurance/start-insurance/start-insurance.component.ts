import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { faTooth } from '@fortawesome/free-solid-svg-icons';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import { faBandage } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-start-insurance',
  templateUrl: './start-insurance.component.html',
  styleUrls: ['./start-insurance.component.css'],
})
export class StartInsuranceComponent implements OnInit {
  constructor(private router: Router) {}

  minDate:Date=new Date();
  maxDate:Date = new Date(new Date().getFullYear()+0,11,31)
  form:any;
  faToothIcon = faTooth;
  faHospitalIcon = faHospital;
  faBandageIcon = faBandage;
  

  ngOnInit(): void {
    this.form = new FormGroup({
      startDate: new FormControl ("", Validators.required),
      endDate: new FormControl (null , Validators.required)
  });
  }

  chosenDate($event:any){
    let endOfInsurance = this.setOneYear($event.value);
    console.log(endOfInsurance)
    this.form.controls.endDate.setValue(endOfInsurance);
  }

  setOneYear(date:any){
    date.setFullYear(date.getFullYear() + 1);
    return date;
  }


  continue() {
    this.router.navigate(['/packageSelection']);
  }
}


