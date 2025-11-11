import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from '../app.routing';
import { appRoutingProvider } from '../app.routing';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from '../services/service.personas';
import { Personasapi } from '../components/personasapi/personasapi';
import { Personasstandalone } from '../components/personasstandalone/personasstandalone';
import { ServiceCoches } from '../services/service.coches';
import { CochesComponent } from '../components/coches.component/coches.component';
import { PlantillasimpleComponent } from '../components/plantillasimple.component/plantillasimple.component';
import { MenuComponent } from '../components/menu.component/menu.component';
import { ServicePlantillas } from '../services/service.plantillas';

@NgModule({
  declarations: [
    App, 
    Personasapi,
    CochesComponent,
    PlantillasimpleComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Personasstandalone,
    routing,
    FormsModule
  ],
  providers: [
    ServicePersonas,
    ServiceCoches,
    ServicePlantillas,
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
