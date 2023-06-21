import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { authService } from "./services/auth.service";
import { FormServiceInsurance } from "./services/formServiceInsurance.service";
import { of } from "rxjs";

@Injectable({
   providedIn: 'root'
})
export class AuthGuard implements CanActivate {

   constructor(private authService: authService, private router: Router, public insFormService: FormServiceInsurance) {}

   canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): boolean | UrlTree {
      let url: string = state.url;

          return this.checkLogin(url);
      }

      checkLogin(url: string): any {
         console.log("Url: " + url)
         let user = sessionStorage.getItem('UserType');

         if(user=='admin'){
            if(url.includes('admin')){
               this.authService.adminCheck(true)
               this.authService.isLogged(true)
                   return true
            } else{
               this.authService.logout();
               return this.router.parseUrl('/login');
            }
         }
         else if(user == 'insurer'){
            if(!url.includes('admin')){
            this.authService.adminCheck(false)
            this.authService.isLogged(true)
            return true
            }
            else{
               this.authService.logout();
               return this.router.parseUrl('/login');
            }
         }
         else{
            if(!url.includes('admin') && !url.includes('my')){
                return true;
            }
            else{
               this.authService.logout();
               return this.router.parseUrl('/login');
            }
         }
      }

}