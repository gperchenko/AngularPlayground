import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import { Entity } from '@app/shared/models';
import { Entity3Service } from '@app/components/entity3/entity3.service';

@Component({
  selector: 'app-entity3',
  templateUrl: './entity3.component.html',
  styleUrls: ['./entity3.component.css']
})
export class Entity3Component implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  entities: Entity[];
  entityName: string;

  constructor(
    private router: Router,
    private entity3Service: Entity3Service
  ) { }

  ngOnInit() {
    this.entities = this.entity3Service.getAll();
  }

  addEntity() {
    let newEntity = new Entity;
    newEntity.name = this.entityName;
    this.entity3Service.addEntity(newEntity);
    this.entities = this.entity3Service.getAll();
   }

   GoToEntityDetails(entity: Entity)
   {
     this.router.navigate(['entity3/entityDetails', entity.id])
   }
}
