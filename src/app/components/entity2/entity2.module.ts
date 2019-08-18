import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { Entity2Component } from './entity2/entity2.component';
import { Entity2DetailsComponent } from './entity2-details/entity2-details.component';
import { Entity2Service } from './entity2.service';

const routes: Routes = [
  { path: 'entity2/entityDetails/:id', component: Entity2DetailsComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    BrowserModule,
    SharedModule
  ],
  declarations: [
    Entity2Component,
    Entity2DetailsComponent
  ]
})
export class Entity2Module { 
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: Entity2Module,
      providers: [
        Entity2Service,
      ]
    }
  }
}