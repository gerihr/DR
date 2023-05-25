import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormServiceInsurance } from 'src/app/services/formServiceInsurance.service';
import { PolicyService } from 'src/app/services/policy.service';
import { sharedService } from 'src/app/services/sharedService.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  form:any;
  constructor(private router: Router, private formService: FormServiceInsurance, private policyService: PolicyService, private sharedService: sharedService) {}

  ngOnInit(): void {

  }

  continue() {

    let policyForm = {
      insurer: this.formService.getInsurerForm(),
      insured: this.formService.getInsuredForm(),
      policy: this.formService.getPolicyForm().value
    };

    this.sharedService.isLoading(true);
    this.policyService.savePolicy(policyForm)
    .subscribe((res:any) => {
      this.sharedService.isLoading(false);
      this.sharedService.setPolicy(res)
        this.router.navigate(['/successful', res.policyNumber]);
    },
        err => {
          this.sharedService.isLoading(false)
          this.router.navigate(['/error'])
        } 
    );
  }

}
