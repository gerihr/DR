import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurer-data',
  templateUrl: './insurer-data.component.html',
  styleUrls: ['./insurer-data.component.css'],
})
export class InsurerDataComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  continue() {
    this.router.navigate(['/guardianData']);
  }
}
