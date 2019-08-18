import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import { Entity } from '@app/shared/models';
import { Entity2Service } from '@app/components/entity2/entity2.service';

@Component({
  selector: 'app-entity2',
  templateUrl: './entity2.component.html',
  styleUrls: ['./entity2.component.css']
})
export class Entity2Component implements OnInit {
  
  displayedColumns: string[] = ['id', 'name'];
  entities: Entity[];
  entityName: string;

  constructor(
    private router: Router,
    private entity2Service: Entity2Service
  ) {}

  ngOnInit() {
    this.entities = this.entity2Service.getAll();
  }

  addEntity() {
    let newEntity = new Entity;
    newEntity.name = this.entityName;
    this.entity2Service.addEntity(newEntity);
    this.entities = this.entity2Service.getAll();
   }

   GoToEntityDetails(entity: Entity)
   {
     this.router.navigate(['entity2/entityDetails', entity.id])
   }
}