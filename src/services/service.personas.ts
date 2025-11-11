import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 
import { Observable } from "rxjs"; 
import { environment } from "../environments/environment.development";

@Injectable() 
export class ServicePersonas 
{ 
 //PARA PODER REALIZAR PETICIONES, NECESITAMOS EL OBJETO 
 //HttpClient. 
 //DICHO OBJETO DEBEMOS INYECTARLO EN LAS CLASES QUE UTILICEMOS CON APIS 
 constructor(private _http: HttpClient){} 
 //SI VAMOS A DEVOLVER LA PETICION, EL OBJETO A DEVOLVER ES  
 //UN Observable<any> PARA PODER SUBSCRIBIRNOS 
 getPersonas(): Promise<any> 
 { 
    let urlApi = environment.apiPersonas; 
    let request = "api/personas" 
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