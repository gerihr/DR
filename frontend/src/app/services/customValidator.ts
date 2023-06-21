import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";

@Injectable({
    providedIn: 'root',
  })
  
export class CustoValidator {
    constructor(){}

      static personalId(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
              return (control.value && (CustoValidator.isValidPin(control.value))) ? 
                null : {personalId: control.value};
            };
          }

    static isValidPin(pin: any) {
      const inFuture = (d ) => (d.setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0));
      // @ts-ignore
      const isValidDate = (d) => (d instanceof Date && !isNaN(d));
      const pinStr = pin.toString();
      let result = false;
  
      if (pinStr.length === 10) {
        const pinWeights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        const year = parseInt(pinStr.substr(0, 2), 10);
        const month = parseInt(pinStr.substr(2, 2), 10);
        const day = parseInt(pinStr.substr(4, 2), 10);

  
        const date = (month > 40) ?
          new Date(year + 2000, month - 41, day) :
          month > 20 ?
            new Date(year + 1800, month - 21, day) :
            new Date(year + 1900, month - 1, day);

        if (isValidDate(date) && !inFuture(date)) {
          const checksum = parseInt(pinStr.substr(9, 1), 10);
          let pinsum = 0;
  
          for (let i = 0;i < 9;i++) {
            pinsum += parseInt((pinStr.substr(i, 1) * pinWeights[i]).toString(), 10);
          }
  
          let validChecksum = pinsum % 11;
          if (validChecksum == 10) {
            validChecksum = 0;
          }
  
          result = (checksum === validChecksum) ? true : false;
        }
      }
      return result;
    }
    
}