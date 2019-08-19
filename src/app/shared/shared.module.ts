import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/shared/material.module';

import { RelationshipsComponent } from '@app/shared/components/relationships/relationships.component';
import { AddNewRelationshipComponent } from '@app/shared/components/add-new-relationship/add-new-relationship.component';

@NgModule({
  declarations: [
    RelationshipsComponent,
    AddNewRelationshipComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    RelationshipsComponent
  ],
  entryComponents: [
    AddNewRelationshipComponent
  ]
})
export class SharedModule { }
