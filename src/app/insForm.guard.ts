import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable, of} from 'rxjs';
import { FormServiceInsurance } from './services/formServiceInsurance.service';


@Injectable({
  providedIn: 'root'
})
export class InsFormGurard implements CanActivate {
  constructor(public insFormService: FormServiceInsurance, private router: Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.insFormService?.claimForm) {
      return of(this.router.createUrlTree(['/insurerData']));
    }
    return true;
  }
}
