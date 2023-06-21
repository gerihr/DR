import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root',
  })
export class PolicyService {
    constructor(private http: HttpClient){}


    savePolicy(policyData ){
        return  this.http.post('/v1/policy', policyData)
    }

    getPoliciesByEgn(egn: string){
        return  this.http.get('/v1/policy-list/'+egn)
    }

    getPolicyTitular(egn: string){
        return  this.http.get('/v1/policy-titular/'+egn)
    }


}