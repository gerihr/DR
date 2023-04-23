import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-claims-list-item',
  templateUrl: './claims-list-item.component.html',
  styleUrls: ['./claims-list-item.component.css']
})
export class ClaimsListItemComponent implements OnInit {

  @Input("claim") claim: any;
  @Input("opened") opened: any;
  constructor() { }

  ngOnInit(): void {
  }

}
