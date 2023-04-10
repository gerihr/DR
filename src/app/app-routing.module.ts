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

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'insurerData', component: InsurerDataComponent},
  {path: 'guardianData', component: GuardianDataComponent},
  {path: 'start-insurance', component: StartInsuranceComponent},
  {path: 'packageSelection', component: GetInsuranceComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'successful', component: SuccessfulPaymentComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: 'new-claim', component: NewClaimComponent},
  {path: 'my-profile', component: MyProfileComponent},
  {path: 'my-claims', component: MyClaimDetailsComponent},
  {path: 'admin-claims', component: AdminPageClaimsComponent},
  {path: 'claim-details', component: AdminClaimDetailsComponent},
  {path: 'login', component: LogInComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
