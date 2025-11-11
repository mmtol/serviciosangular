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

  getFunciones(): Promise<any> 
 { 
    let urlApi = environment.apiPlantilas; 
    let request = "api/plantilla/funciones"; 
    let promise = new Promise((resolve) => 
   {
      this._http.get(urlApi+request).subscribe(response =>
      {
         resolve(response);
      })
   })
   return promise;
 }

 getPlantillaPorFunciones(funciones:Array<string>):Promise<any>
 {
   let urlApi= environment.apiPlantilas;
   let datos="";
   for (let funcion of funciones)
   {
      datos+="funcion="+funcion+"&";
   }
   datos = datos.substring(0, datos.length - 1);
   let endPoint = "api/plantilla/plantillafunciones?"+datos;
   let promise = new Promise((resolve) =>
   {
      this._http.get(urlApi+endPoint).subscribe(response =>
      {
         resolve(response);
      })
   })
   return promise;
 }
} 