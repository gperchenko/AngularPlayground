import { TestBed } from '@angular/core/testing';

import { Entity2Service } from './entity2.service';

describe('Entity2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Entity2Service = TestBed.get(Entity2Service);
    expect(service).toBeTruthy();
  });
});
