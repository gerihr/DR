import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { authService } from '../services/auth.service';
import { CustoValidator } from '../services/customValidator';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router, private authService: authService) { }

  show:boolean=false;
  form:any;

  ngOnInit(): void {
    this.form = new FormGroup({
      egn: new FormControl ("", {validators:[Validators.required, CustoValidator.personalId()]}),
      code: new FormControl ("", Validators.required)
  });
  }

  showEGN(){
    this.show = !this.show;
    console.log(this.form)
  }

  toMyProfile(){

    this.authService.login(this.form.value).subscribe(res=>{
      if(res){
        this.router.navigate(['/my-profile']);
      }
    })
  }

}
