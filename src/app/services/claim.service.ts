import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";

@Injectable({
    providedIn: 'root',
  })
export class ClaimService {

    currentClaimID ;

    constructor(private http: HttpClient){}

    newClaim(claimForm ){
      return  this.http.post('/v1/claim', claimForm )
    }

    getClaims(){
        return  this.http.get('/v1/claims' )
    }
    
    getClaimById(id ){
        return  this.http.get('/v1/claim/'+id )
    }

    getClaimByEgn(egn ){
        return  this.http.get('/v1/claims-user/'+egn )
    }

    updateClaimStatus(claimStatusForm , id ){
        return  this.http.put('/v1//claim-status/'+id, claimStatusForm )
    }

    setCurrentClaimdId(id ){
        this.currentClaimID=id;
    }

    getCurrentClaimdId(){
       return this.currentClaimID;
    }


}