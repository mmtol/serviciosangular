import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.development";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ServiceCoches
{
    constructor(private _http: HttpClient){} 

    getCoches(): Promise<any> 
     { 
        let urlApi = environment.apiCoches; 
        let request = "webresources/coches" 
        let promise = new Promise((resolve) => 
       {
          this._http.get(urlApi+request).subscribe(response =>
          {
             resolve(response);
          })
       })
       return promise;
     } 
}