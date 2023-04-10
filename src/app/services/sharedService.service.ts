import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";

@Injectable({
    providedIn: 'root',
  })
export class sharedService {

    //Проверка дали лицето е над 18 години
     isAdult(egn:any) : any {
      let date = this.getBirhtDay(egn)
        var diff_ms = Date.now() - date.getTime();
        var age_dt = new Date(diff_ms); 
      
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }


      //Взимаме дата на раждане
      getBirhtDay (egnNum :any) {
        let monthBorn = this.getNums(egnNum, 2, 2);
        const dayBorn = this.getNums(egnNum, 4, 2);
        var year_flag = 1900;
      
        if (monthBorn > 40) {
          year_flag += 100;
        } else if (monthBorn > 20) {
          year_flag -= 100;
        }
      
        monthBorn = (monthBorn % 20) - 1;

        return (
          new Date(year_flag + this.getNums(egnNum, 0, 2), monthBorn, dayBorn)
        );
      };
      
       getNums (str:any, start:any, simbolNum:any) {
        return str.substr(start, simbolNum) * 1;
      };    
    
}