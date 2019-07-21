import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../shared/material.module';

import { Entity1Component } from './entity1/entity1.component';
import { Entity1DetailsComponent } from './entity1-details/entity1-details.component';

const routes: Routes = [
  { path: 'entity1Details', component: Entity1DetailsComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [
    Entity1Component,
    Entity1DetailsComponent
  ]
})
export class Entity1Module { }