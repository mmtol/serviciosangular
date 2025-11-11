import { Component, OnInit } from '@angular/core';
import { Plantilla } from '../../models/Plantilla';
import { ServicePlantillas } from '../../services/service.plantillas';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component(
  {
  selector: 'app-plantillasimple',
  standalone: false,
  templateUrl: './plantillasimple.component.html',
  styleUrl: './plantillasimple.component.css',
})
export class PlantillasimpleComponent implements OnInit
{
  public plantillas!:Array<Plantilla>;
  @ViewChild("id") id:ElementRef
  public plantilla!:Plantilla;

  constructor(private _service:ServicePlantillas)
  {
    this.id = new ElementRef(0);
  }

  ngOnInit():void
  {
    this._service.getPlantillas().then(response =>
    {
      this.plantillas = response;
    })
  }

  sacarPlantilla()
  {
    let aux = this.id.nativeElement.value;

  }
}
