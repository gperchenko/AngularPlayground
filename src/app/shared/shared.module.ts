import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationshipsComponent } from '@app/shared/components/relationships/relationships.component';

@NgModule({
  declarations: [
    RelationshipsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RelationshipsComponent
  ]
})
export class SharedModule { }
