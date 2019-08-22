import { Injectable } from '@angular/core';

import { IEntityService } from '@app/components/interfaces/ientity-service';
import { Entity } from '@app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class Entity2Service implements IEntityService {

  private entities: Entity[] = [
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Microsoft'}
  ]
  private entityTypeName: string = "E2";

  constructor() {}

  getAll(): Entity [] {
    return this.entities.filter(e => true);
  }

  addEntity(entity: Entity) {
    entity.id = this.entities.length + 1;
    this.entities.push(entity);
  }

  getById(id: number): Entity {
    return this.entities.find(r => r.id == id);
  }

  getEntityTypeName() : string {
    return this.entityTypeName;
  }
}

