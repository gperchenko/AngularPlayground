export class Entity {
    id: number;
    name: string;
  }

  export class Relationship {
    id: number;
    name: string;
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



