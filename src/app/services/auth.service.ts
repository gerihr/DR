import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";
import { Router } from "@angular/router";
import { BehaviorSubject, ReplaySubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class authService {
    private isLoggedIn: Subject<Object> = new ReplaySubject<Object>(1);
    public readonly loggedIn$ = this.isLoggedIn.asObservable();

    private isAdmin: Subject<Object> = new ReplaySubject<Object>(1);
    public readonly isAdmin$ = this.isAdmin.asObservable();

    constructor(private http: HttpClient, private router: Router){}

    login(loginForm:any){
      return  this.http.post('/v1/login', loginForm )
    }

    logout(){
      this.isLogged(false);
      this.adminCheck(false)
      sessionStorage.removeItem('UserType'); 
      this.router.navigate(['/']);
    }

    isLogged(bool:boolean){
      this.isLoggedIn.next(bool);
    }

    adminCheck(bool:boolean){
      this.isAdmin.next(bool);
    }
}