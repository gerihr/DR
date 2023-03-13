import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './additional-modules/additional-modules.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GetInsuranceComponent } from './insurance/get-insurance/get-insurance.component';
import { GuardianDataComponent } from './insurance/guardian-data/guardian-data.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PaymentComponent } from './insurance/payment/payment.component';
import { StartInsuranceComponent } from './insurance/start-insurance/start-insurance.component';
import { SuccessfulPaymentComponent } from './insurance/successful-payment/successful-payment.component';
import { FooterComponent } from './footer/footer.component';
import { NewClaimComponent } from './claims/new-claim/new-claim.component';
import { SuccessfulClaimComponent } from './claims/successful-claim/successful-claim.component';
import { MyProfileComponent } from './customer-profile/my-profile/my-profile.component';
import { MyClaimDetailsComponent } from './customer-profile/my-claim-details/my-claim-details.component';
import { InsurerDataComponent } from './insurance/insurer-data/insurer-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactsComponent,
    GetInsuranceComponent,
    GuardianDataComponent,
    InsurerDataComponent,
    PaymentComponent,
    StartInsuranceComponent,
    ErrorPageComponent,
    SuccessfulPaymentComponent,
    FooterComponent,
    NewClaimComponent,
    SuccessfulClaimComponent,
    MyProfileComponent,
    MyClaimDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
