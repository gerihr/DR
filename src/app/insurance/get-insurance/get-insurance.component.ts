import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-insurance',
  templateUrl: './get-insurance.component.html',
  styleUrls: ['./get-insurance.component.css']
})
export class GetInsuranceComponent implements OnInit {

 
  chosenPackage: any
  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  choosePackage(packIndex: any){
   this.chosenPackage = packIndex
  }

  continue(){
    this.router.navigate(['/payment']);
  }

}
