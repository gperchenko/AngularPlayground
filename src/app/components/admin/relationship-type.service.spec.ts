import { TestBed } from '@angular/core/testing';

import { RelationshipTypeService } from './relationship-type.service';

describe('RelationshipTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RelationshipTypeService = TestBed.get(RelationshipTypeService);
    expect(service).toBeTruthy();
  });
});
