export class Entity {
    id: number;
    name: string;
  }

  export class Relationship {
    id: number;
    relationshipTypeId: number;
    parentId: number;
    parent: Entity;
    childId: number;
    child: Entity;
    startDate: string;
    roleId: number;
    role: Role;
  }

  export class RelationshipType {
    id: number;
    name: string;
    parentName: string;
    childName: string;
  }
  
  export class Role {
    id: number;
    relationshipTypeId: number;
    name: string;
  }
