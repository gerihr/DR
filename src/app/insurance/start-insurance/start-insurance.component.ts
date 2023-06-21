import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { faTooth } from '@fortawesome/free-solid-svg-icons';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import { faBandage } from '@fortawesome/free-solid-svg-icons';
import { FormServiceInsurance } from 'src/app/services/formServiceInsurance.service';



@Component({
  selector: 'app-start-insurance',
  templateUrl: './start-insurance.component.html',
  styleUrls: ['./start-insurance.component.css'],
})
export class StartInsuranceComponent implements OnInit {
  constructor(private router: Router, private formService: FormServiceInsurance) {}

  minDate:Date=new Date();
  maxDate:Date = new Date(new Date().getFullYear()+0,11,31)
  form ;
  additionalPack 
  faToothIcon = faTooth;
  faHospitalIcon = faHospital;
  faBandageIcon = faBandage;
  

  ngOnInit(): void {
    this.form = new FormGroup({
      startDate: new FormControl ("", Validators.required),
      endDate: new FormControl (null , Validators.required)
  });
  }

  chosenDate($event ){
    // this.form.controls.endDate.setValue($event.value);
    // let startDate = $event.value
    const aYearFromStart = new Date($event.value);
    aYearFromStart.setFullYear(aYearFromStart.getFullYear() + 1);
    this.form.controls.endDate.setValue(aYearFromStart);
    console.log(this.form)
  }

  setOneYear(date ){
    date.setFullYear(date.getFullYear() + 1);
    return date;
  }

  addPack(value:string){
    this.additionalPack=value;
  
  }


  continue() {
    this.formService.setPolicyForm(this.form);
    this.formService.setAdditionalPack(this.additionalPack);
    this.router.navigate(['/packageSelection']);
  }
}


