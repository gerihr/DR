import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root',
  })
export class enumsService {
    constructor(private http: HttpClient){}


    getTypes(){
        return  this.http.get('/v1/types')
    }

    getCategories(){
        return  this.http.get('/v1/categories')
    }


}