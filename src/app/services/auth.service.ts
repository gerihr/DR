import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";

@Injectable({
    providedIn: 'root',
  })
export class authService {
    isAuth:any 

    constructor(private http: HttpClient){}

    login(loginForm:any){
      return  this.http.post('/v1/login', loginForm )

    }

    getAuth(){
        return this.isAuth;
    }

    setAuth(value:any){
        this.isAuth=value;
    }
}