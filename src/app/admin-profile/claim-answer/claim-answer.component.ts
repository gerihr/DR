import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim-answer',
  templateUrl: './claim-answer.component.html',
  styleUrls: ['./claim-answer.component.css']
})
export class ClaimAnswerComponent implements OnInit {
  declined:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
