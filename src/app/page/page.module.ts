import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HttpClientModule } from "@angular/common/http";

import { PAGES_ROUTES } from './pages.routes';

// Components
import { AgregarComponent } from './agregar/agregar.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarComponent,
    NoFoundComponent,
    PagesComponent,
    EditarComponent
  ],
  exports: [
    AgregarComponent,
    NoFoundComponent,
    PagesComponent
  ],
  imports: [
    SharedModule,
    ComponentsModule,
    PAGES_ROUTES,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PageModule { }
