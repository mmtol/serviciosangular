import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment.development";

@Injectable() 
export class ServicePlantillas 
{
 constructor(private _http: HttpClient){}
 getPlantillas(): Promise<any> 
 { 
    let urlApi = environment.apiPlantilas; 
    let request = "api/plantilla" 
    let promise = new Promise((resolve) => 
   {
      this._http.get(urlApi+request).subscribe(response =>
      {
         resolve(response);
      })
   })
   return promise;
 }

 getPlantilla(id:number):Promise<any>
 {
    let urlApi = environment.apiPlantilas; 
    let request = "api/plantilla/"+id;
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