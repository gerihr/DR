import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-insurance',
  templateUrl: './get-insurance.component.html',
  styleUrls: ['./get-insurance.component.css']
})
export class GetInsuranceComponent implements OnInit {

  duration = [
    {value: '0', viewValue: '6 месеца'},
    {value: '1', viewValue: '1 година'},
    {value: '3', viewValue: '3 години'},
  ];
  startDate: any
  constructor() { }

  ngOnInit(): void {
   this.startDate = new Date(1990, 0, 1);

  }

}
