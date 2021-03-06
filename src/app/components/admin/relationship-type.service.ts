import { Injectable } from '@angular/core';

import { RelationshipType } from '@app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class RelationshipTypeService {

  private relationshipTypes: RelationshipType [] = [
    { id: 1, name: 'E1 to E2', parentName: 'E1', childName: 'E2' },
    { id: 2, name: 'E1 to E3', parentName: 'E1', childName: 'E3' },
    { id: 3, name: 'E2 to E3', parentName: 'E2', childName: 'E3' },
  ];

  constructor() { }

  // get all records 

  getAll(): RelationshipType [] {
    return this.relationshipTypes;
  }

  getById(id: number): RelationshipType {
    return this.relationshipTypes.find(r => r.id == id);
  }

  getMyTypes(name: string): RelationshipType [] {
    return this.relationshipTypes.filter(r => r.parentName == name || r.childName == name);
  }
}
