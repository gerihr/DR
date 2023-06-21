import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetInsuranceComponent } from './insurance/get-insurance/get-insurance.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GuardianDataComponent } from './insurance/guardian-data/guardian-data.component';
import { PaymentComponent } from './insurance/payment/payment.component';
import { StartInsuranceComponent } from './insurance/start-insurance/start-insurance.component';
import { InsurerDataComponent } from './insurance/insurer-data/insurer-data.component';
import { SuccessfulPaymentComponent } from './insurance/successful-payment/successful-payment.component';
import { NewClaimComponent } from './claims/new-claim/new-claim.component';
import { MyProfileComponent } from './customer-profile/my-profile/my-profile.component';
import { ClaimsListItemComponent } from './customer-profile/claims-list-item/claims-list-item.component';
import { MyClaimDetailsComponent } from './customer-profile/my-claim-details/my-claim-details.component';
import { LogInComponent } from './log-in/log-in.component';
import { AdminPageClaimsComponent } from './admin-profile/admin-page-claims/admin-page-claims.component';
import { AdminClaimDetailsComponent } from './admin-profile/admin-claim-details/admin-claim-details.component';
import { AuthGuard } from './auth.guard';
import { InsFormGurard } from './insForm.guard';
import { AdminsListComponent } from './admin-profile/admins-list/admins-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'insurerData', component: InsurerDataComponent, canActivate: [AuthGuard]},
  {path: 'guardianData', component: GuardianDataComponent, canActivate: [AuthGuard, InsFormGurard]},
  {path: 'start-insurance', component: StartInsuranceComponent, canActivate: [AuthGuard]},
  {path: 'packageSelection', component: GetInsuranceComponent, canActivate: [AuthGuard, InsFormGurard]},
  {path: 'payment', component: PaymentComponent},
  {path: 'successful/:id', component: SuccessfulPaymentComponent, canActivate: [AuthGuard, InsFormGurard]},
  {path: 'error', component: ErrorPageComponent, canActivate: [AuthGuard]},
  {path: 'my-new-claim', component: NewClaimComponent, canActivate: [AuthGuard]},
  {path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuard]},
  {path: 'my-claims/:id', component: MyClaimDetailsComponent, canActivate: [AuthGuard]},
  {path: 'admin-claims', component: AdminPageClaimsComponent, canActivate: [AuthGuard]},
  {path: 'admin-list', component: AdminsListComponent, canActivate: [AuthGuard]},
  {path: 'admin-claim-details/:id', component: AdminClaimDetailsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LogInComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
