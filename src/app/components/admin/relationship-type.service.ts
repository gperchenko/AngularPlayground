import { Injectable } from '@angular/core';

import { RelationshipType } from '@app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class RelationshipTypeService {

  private relationshipTypes: RelationshipType [] = [
    { id: 1, name: 'E1 to E2' },
    { id: 2, name: 'E1 to E3' },
    { id: 3, name: 'E2 to E3' },
  ];

  constructor() { }

  // get all records 

  getAll(): RelationshipType [] {
    return this.relationshipTypes;
  }

  getById(id: number): RelationshipType {
    return this.relationshipTypes.find(r => r.id == id);
  }
}
