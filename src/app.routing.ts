import { Personasapi } from "./components/personasapi/personasapi";
import { CochesComponent } from "./components/coches.component/coches.component";
import { PlantillasimpleComponent } from "./components/plantillasimple.component/plantillasimple.component";

import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

const appRoutes:Routes=
[
    {
        path:"personas",
        component:Personasapi
    },
    {
        path:"coches",
        component:CochesComponent
    },
    {
        path:"plantillas",
        component:PlantillasimpleComponent
    }
]

export const appRoutingProvider: any[] = [];

export const routing:ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);