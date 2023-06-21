import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { FormServiceInsurance } from 'src/app/services/formServiceInsurance.service';

@Component({
  selector: 'app-get-insurance',
  templateUrl: './get-insurance.component.html',
  styleUrls: ['./get-insurance.component.css']
})
export class GetInsuranceComponent implements OnInit {

  icon = faStarOfLife;
  chosenPackage: any;
  packageList  = [];
  constructor(private router: Router, private formService: FormServiceInsurance) {}

  ngOnInit(): void {
    this.packageList=this.formService.calculatePremiums();
  }

  choosePackage(packIndex: any){
   this.chosenPackage = packIndex
  }

  continue(pack ){
    let selectedPackage=pack;
    let policyForm = this.formService.getPolicyForm();
    policyForm.controls["healthGoodsLimit"].setValue(pack.healthGoodsLimit);
    policyForm.controls["hospitalLimit"].setValue(pack.hospitalLimit);
    policyForm.controls["outOfHospitalLimit"].setValue(pack.outOfHospitalLimit);
    policyForm.controls["dentalLimit"].setValue(pack.dentalLimit);
    policyForm.controls["price"].setValue(pack.price);

    this.formService.setPolicyForm(policyForm)
    this.router.navigate(['/payment']);
  }

}
