import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@app/shared/material.module';

import { RelationshipTypeComponent } from './relationship-type/relationship-type.component';
import { RoleComponent } from './role/role.component';
import {RelationshipTypeService} from './relationship-type.service';
import {RoleService} from './role.service';

const routes: Routes = [
  { path: 'admin/roles/:id', component: RoleComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    RelationshipTypeComponent,
    RoleComponent
  ]
})
export class AdminModule { 
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AdminModule,
      providers: [
        RelationshipTypeService,
        RoleService
      ]
    }
  }
}