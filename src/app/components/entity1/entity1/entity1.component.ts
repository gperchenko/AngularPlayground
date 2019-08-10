import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import { Entity } from '@app/shared/models';
import { Entity1Service } from '@app/components/entity1/entity1.service';

@Component({
  selector: 'app-entity1',
  templateUrl: './entity1.component.html',
  styleUrls: ['./entity1.component.css']
})
export class Entity1Component implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  entities: Entity[];
  entityName: string;

  constructor(
    private router: Router,
    private entity1Service: Entity1Service
  ) {}

  ngOnInit() {
    this.entities = this.entity1Service.getAll();
  }

  addEntity() {
    let newEntity = new Entity;

    newEntity.name = this.entityName;
    this.entity1Service.addEntity(newEntity);
    this.entities = this.entity1Service.getAll();
   }
   
   GoToEntityDetails(entity: Entity)
   {
     this.router.navigate(['entity1/entityDetails', entity.id])
   }
 
}
