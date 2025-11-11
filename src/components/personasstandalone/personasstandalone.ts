import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/Persona';
import { ServicePersonas } from '../../services/service.personas';

@Component(
  {
  selector: 'app-personasstandalone',
  standalone: true,
  templateUrl: './personasstandalone.html',
  styleUrl: './personasstandalone.css',
  providers: [ServicePersonas]
})
export class Personasstandalone implements OnInit
{
  // public personas!: Array<Persona>;
  // constructor()
  // {
  //   this.personas = new Array<Persona>();
  //   let p1 = new Persona(1, "1", "1", 1);
  //   let p2 = new Persona(2, "2", "2", 2);
  //   this.personas.push(p1);
  //   this.personas.push(p2);
  // }

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
