import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from '../services/service.personas';
import { Personasapi } from '../components/personasapi/personasapi';
import { Personasstandalone } from '../components/personasstandalone/personasstandalone';
import { ServiceCoches } from '../services/service.coches';
import { CochesComponent } from '../components/coches.component/coches.component';

@NgModule({
  declarations: [
    App, 
    Personasapi,
    CochesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Personasstandalone
  ],
  providers: [
    ServicePersonas,
    ServiceCoches,
    provideHttpClient(),
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
