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
