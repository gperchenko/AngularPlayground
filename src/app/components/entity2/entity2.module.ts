import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../shared/material.module';

import { Entity2Component } from './entity2/entity2.component';
import { Entity2DetailsComponent } from './entity2-details/entity2-details.component';

const routes: Routes = [
  { path: 'entity2Details', component: Entity2DetailsComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [
    Entity2Component,
    Entity2DetailsComponent
  ]
})
export class Entity2Module { }