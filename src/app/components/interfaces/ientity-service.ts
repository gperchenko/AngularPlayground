import { Entity } from '@app/shared/models';

export interface IEntityService {
    getAll(): Entity [];
    addEntity(entity: Entity): void;
    getById(id: number): Entity; 
    getEntityTypeName() : string; 
}
