import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardian-data',
  templateUrl: './guardian-data.component.html',
  styleUrls: ['./guardian-data.component.css']
})
export class GuardianDataComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  continue() {
    this.router.navigate(['/start-insurance']);
  }

}
