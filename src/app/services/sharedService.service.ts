import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class sharedService {

  private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly isLoading$ = this.loading.asObservable();

  private policyInfo$ = new BehaviorSubject<any>({});
  policy$ = this.policyInfo$.asObservable();

  private userClaimsInfo$ = new BehaviorSubject<any>({});
  userClaimsInformation$ = this.userClaimsInfo$.asObservable();

  setPolicy(info: any) {
    this.policyInfo$.next(info);
  }

    //Проверка дали лицето е над 18 години
     isAdult(egn ) : any {
      let date = this.getBirhtDay(egn)
        var diff_ms = Date.now() - date.getTime();
        var age_dt = new Date(diff_ms); 
      
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }


      //Взимаме дата на раждане
      getBirhtDay (egnNum  ) {
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
      
       getNums (str , start , simbolNum ) {
        return str.substr(start, simbolNum) * 1;
      };    

      isLoading(bool:boolean){
        this.loading.next(bool)
      }

      setUserClaimsInformation(info ){
        this.userClaimsInfo$.next(info);
      }

      previewFile(file ){
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
         let base64str=(reader?.result as string);
         var win  = window.open();
        window.document.write('<iframe src="' + base64str  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
        }
      }
    
}