import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './shared/app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { AdminModule } from './components/admin/admin.module'
import { Entity1Module } from './components/entity1/entity1.module';
import { Entity2Module } from './components/entity2/entity2.module';
import { Entity3Module } from './components/entity3/entity3.module';

import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    AdminModule,
    Entity1Module,
    Entity2Module,
    Entity3Module,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
