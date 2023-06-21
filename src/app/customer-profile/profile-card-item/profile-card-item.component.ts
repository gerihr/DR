import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-card-item',
  templateUrl: './profile-card-item.component.html',
  styleUrls: ['./profile-card-item.component.css']
})
export class ProfileCardItemComponent implements OnInit {

  constructor(private router: Router) { }
  
  personalData : any;
  isEditing = false;
  @Input() insuredData ; 

  ngOnInit(): void {
    const form = new FormGroup({
      name: new FormControl('name'),
      phoneNumber: new FormControl('phoneNumber'),
      egn: new FormControl('egn'),
      address: new FormControl('address'),
      kids: new FormControl('kids')

    });
    
  }

  toMyClaims(egn ){
    this.router.navigate(['/my-claims',  btoa(egn) ]);
  }

  onEditing(){
    this.isEditing=!this.isEditing
  }

}
