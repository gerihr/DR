import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sharedService } from 'src/app/services/sharedService.service';

@Component({
  selector: 'app-successful-payment',
  templateUrl: './successful-payment.component.html',
  styleUrls: ['./successful-payment.component.css']
})
export class SuccessfulPaymentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private sharedService: sharedService) { }

  policyNum ;
  newRegistration ;

  ngOnInit(): void {

    this.sharedService.policy$.subscribe((value) => {
      this.policyNum = value.policyNumber;
      this.newRegistration = value.isNewUserCreated;
    }); 

    this.route.paramMap.subscribe((params) => {
      this.policyNum = params.get('id');
    });
  }

}
