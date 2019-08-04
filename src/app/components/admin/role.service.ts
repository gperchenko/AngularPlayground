import { Injectable } from '@angular/core';

import { Role } from '@app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private roles: Role [] = [
    { id: 1, relationshipTypeId: 1,  name: 'role11' },
    { id: 2, relationshipTypeId: 1,  name: 'role12' },
    { id: 3, relationshipTypeId: 2,  name: 'role21' },
    { id: 4, relationshipTypeId: 2,  name: 'role22' },
    { id: 5, relationshipTypeId: 3,  name: 'role31' },
    { id: 6, relationshipTypeId: 3,  name: 'role32' }
  ];

  constructor() { }

  getRolesByType(typeId: number): Role [] {
    return this.roles.filter(r => r.relationshipTypeId == typeId);
  }

  addRole(role: Role) {
    role.id = this.roles.length + 1;
    this.roles.push(role);
  }
}
