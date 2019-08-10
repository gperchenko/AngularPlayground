import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { Entity1Component } from './entity1/entity1.component';
import { Entity1DetailsComponent } from './entity1-details/entity1-details.component';
import { Entity1Service } from './entity1.service';

const routes: Routes = [
  { path: 'entity1/entityDetails/:id', component: Entity1DetailsComponent }
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
    Entity1Component,
    Entity1DetailsComponent
  ]
})
export class Entity1Module { 
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: Entity1Module,
      providers: [
        Entity1Service,
      ]
    }
  }
}