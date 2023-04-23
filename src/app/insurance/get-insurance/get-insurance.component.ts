import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-get-insurance',
  templateUrl: './get-insurance.component.html',
  styleUrls: ['./get-insurance.component.css']
})
export class GetInsuranceComponent implements OnInit {

  icon = faStarOfLife;
  chosenPackage: any;
  packageList:any = [];
  constructor(private router: Router) {}

  ngOnInit(): void {

    this.packageList = [
      {packType:"Комфорт", price: 25, dental: 100, hospital: 2500 , patient: 450, goods: 100, index: 1 },
      {packType:"Плюс", price: 50, dental: 250, hospital: 4500 , patient: 600, goods: 250, index: 2 },
      {packType:"Макс", price: 100, dental: 350, hospital: 5500 , patient: 800, goods: 350, index: 3 }
    ]

    

  }

  choosePackage(packIndex: any){
   this.chosenPackage = packIndex
  }

  continue(pack:any){
    let selectedPackage=pack;
    console.log(selectedPackage)
    this.router.navigate(['/payment']);
  }

}
