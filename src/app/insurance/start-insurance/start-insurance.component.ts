import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-insurance',
  templateUrl: './start-insurance.component.html',
  styleUrls: ['./start-insurance.component.css'],
})
export class StartInsuranceComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  continue() {
    this.router.navigate(['/get-insurance']);
  }
}
