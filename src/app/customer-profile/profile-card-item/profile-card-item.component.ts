import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-card-item',
  templateUrl: './profile-card-item.component.html',
  styleUrls: ['./profile-card-item.component.css']
})
export class ProfileCardItemComponent implements OnInit {

  constructor() { }
  
  personalData : any;
  isEditing = false;

  ngOnInit(): void {
    const form = new FormGroup({
      name: new FormControl('name'),
      phoneNumber: new FormControl('phoneNumber'),
      egn: new FormControl('egn'),
      address: new FormControl('address'),
      kids: new FormControl('kids')

    });
    
  }

  onEditing(){
    this.isEditing=!this.isEditing
  }

}
