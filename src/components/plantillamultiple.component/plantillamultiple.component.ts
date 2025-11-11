import { Component, ElementRef, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/Plantilla';
import { ServicePlantillas } from '../../services/service.plantillas';

@Component(
  {
  selector: 'app-plantillamultiple.component',
  standalone: false,
  templateUrl: './plantillamultiple.component.html',
  styleUrl: './plantillamultiple.component.css',
})
export class PlantillamultipleComponent 
{
  public listaSelect!:Array<string>;
  @ViewChild("funciones") funciones:ElementRef;
  public plantilla!:Array<Plantilla>;

  constructor(private _service:ServicePlantillas)
  {
    this.funciones = new ElementRef("");
  }

  ngOnInit():void
  {
    this._service.getFunciones().then(response =>
    {
      this.listaSelect = response;
    })
  }

  sacarPlantilla()
  {
    let aux = new Array<string>();

    for (var op of this.funciones.nativeElement.options)
    {
      if (op.selected)
      {
        aux.push(op.value);
      }
    }

    this._service.getPlantillaPorFunciones(aux).then(response =>
    {
      this.plantilla = response;
    })
  }
}
