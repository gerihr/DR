import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  personalData : any;
  isEditing = false;

  constructor(private router: Router) { }

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

  toMyClaims(egn:any){
    this.router.navigate(['/my-claims',  btoa(egn) ]);
  }

}
