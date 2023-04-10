import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root',
})
export class FormService {
  claimForm:any;


  insurerData = this.formBuilder.group({
    egn: ['', Validators.required],
    middleName: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    phoneNumber: [null, { validators: Validators.required, updateOn: 'blur' }],
    mobileCode: [null, Validators.required],
    email: [null, Validators.required],
  });


  agreements = this.formBuilder.group({
    elStatementsAddressee: [null, Validators.required],
    dataProtection: ['false', Validators.required],
  });


  contact = this.formBuilder.group({
    preferredEmail: [null, Validators.required],
    preferredMobile: [null, Validators.required],
    personInsured: [null, Validators.required],
  });


  constructor(private formBuilder: FormBuilder) {}


  getForm() {
    if (!this.claimForm) {
      this.claimForm = this.formBuilder.group({
        personDetails: this.formBuilder.group({
          egn: ['', Validators.required],
          firstName: [null, Validators.required],
          lastName: [null, Validators.required],
          phoneNumber: [
            null,
            { validators: Validators.required, updateOn: 'blur' },
          ],
          mobileCode: [null, Validators.required],
          email: [null, Validators.required],
          custId: [null],
        }),
        insuredDetails: this.formBuilder.group({
          egn: ['', Validators.required],
          firstName: [null, Validators.required],
          lastName: [null, Validators.required],
          email: [null, Validators.required],
          phoneNumber: [
            null,
            { validators: Validators.required, updateOn: 'blur' },
          ],
          mobileCode: [null, Validators.required],
          custId: [null],
          age: [null],
          claimRole: [null],
          insuredContractLink: [null],
        }),
        agreements: this.formBuilder.group({
          dataProtection: [
            null,
            [Validators.required, Validators.requiredTrue],
          ],
          elStatementsAddressee: [null, Validators.required],
        }),
        contact: this.formBuilder.group({
          preferredEmail: [null, Validators.required],
          preferredMobile: [null, Validators.required],
        }),
        eventDescription: [null, Validators.required],
        eventDate: [null, Validators.required],
        insuredContractLink: [null],
      });
    }
    return this.claimForm;
  }
}



