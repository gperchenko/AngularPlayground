import { Injectable } from '@angular/core';

import { Role } from '@app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private roles: Role [] = [
    { id: 1, relationshipTypeId: 1,  name: 'Founder' },
    { id: 2, relationshipTypeId: 1,  name: 'Competitor' }
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
