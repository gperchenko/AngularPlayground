import { Injectable } from '@angular/core';

import { Entity } from '@app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class Entity1Service {

  private entities: Entity[] = []

  constructor() { }

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
}
