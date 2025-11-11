import { Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/Persona';

@Component(
{
  selector: 'app-personasapi',
  standalone: false,
  templateUrl: './personasapi.html',
  styleUrl: './personasapi.css',
  providers: [ServicePersonas]
})
export class Personasapi implements OnInit
{
  public personas!:Array<Persona>;
  constructor(private _service:ServicePersonas){}
  
  ngOnInit():void
  {
    this._service.getPersonas().then(response =>
    {
      this.personas = response;
    })
  }
}
