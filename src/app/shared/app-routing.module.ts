import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Entity1Component } from '../components/entity1/entity1/entity1.component';
import { Entity2Component } from '../components/entity2/entity2/entity2.component';
import { Entity3Component } from '../components/entity3/entity3/entity3.component';


const routes: Routes = [
  { path: '', component: Entity1Component },
  { path: 'entity1', component: Entity1Component },
  { path: 'entity2', component: Entity2Component },
  { path: 'entity3', component: Entity3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
