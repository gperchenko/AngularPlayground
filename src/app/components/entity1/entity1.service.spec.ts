import { TestBed } from '@angular/core/testing';

import { Entity1Service } from './entity1.service';

describe('Entity1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Entity1Service = TestBed.get(Entity1Service);
    expect(service).toBeTruthy();
  });
});
