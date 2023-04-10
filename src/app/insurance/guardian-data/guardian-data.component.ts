import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cities } from 'src/app/services/bulgaria-towns';
import { CustoValidator } from 'src/app/services/customValidator';
import { sharedService } from 'src/app/services/sharedService.service';

@Component({
  selector: 'app-guardian-data',
  templateUrl: './guardian-data.component.html',
  styleUrls: ['./guardian-data.component.css']
})
export class GuardianDataComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder, private sharedService: sharedService, 
    public cities: Cities,
    private customValidator: CustoValidator) {
  }

  form:any;

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
  }

  continue() {
    console.log(this.form.value)
    this.router.navigate(['/start-insurance']);
  }

}
