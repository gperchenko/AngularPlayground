import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../shared/material.module';

import { Entity3Component } from './entity3/entity3.component';
import { Entity3DetailsComponent } from './entity3-details/entity3-details.component';

const routes: Routes = [
  { path: 'entity3Details', component: Entity3DetailsComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [
    Entity3Component,
    Entity3DetailsComponent
  ]
})
export class Entity3Module { }