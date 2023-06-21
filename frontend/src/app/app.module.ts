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
import { ClaimsListItemComponent } from './customer-profile/claims-list-item/claims-list-item.component';
import { ProfileCardItemComponent } from './customer-profile/profile-card-item/profile-card-item.component';
import { LogInComponent } from './log-in/log-in.component';
import { AdminPageClaimsComponent } from './admin-profile/admin-page-claims/admin-page-claims.component';
import { AdminClaimDetailsComponent } from './admin-profile/admin-claim-details/admin-claim-details.component';
import { ClaimAnswerComponent } from './admin-profile/claim-answer/claim-answer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClaimApprovedComponent } from './admin-profile/claim-approved/claim-approved.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { PreviewFileComponent } from './preview-file/preview-file.component';
import { AdminsListComponent } from './admin-profile/admins-list/admins-list.component';


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
    MyClaimDetailsComponent,
    ClaimsListItemComponent,
    ProfileCardItemComponent,
    LogInComponent,
    AdminPageClaimsComponent,
    AdminClaimDetailsComponent,
    ClaimAnswerComponent,
    ClaimApprovedComponent,
    FileUploaderComponent,
    PreviewFileComponent,
    AdminsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CurrencyMaskModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 15000, // 15 seconds
      progressBar: true,
    }),
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
