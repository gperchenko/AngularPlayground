import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { Entity3Component } from './entity3/entity3.component';
import { Entity3DetailsComponent } from './entity3-details/entity3-details.component';
import { Entity3Service } from './entity3.service';

const routes: Routes = [
  { path: 'entity3/entityDetails/:id', component: Entity3DetailsComponent }
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
    Entity3Component,
    Entity3DetailsComponent
  ]
})
export class Entity3Module { 
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: Entity3Module,
      providers: [
        Entity3Service,
      ]
    }
  }
}