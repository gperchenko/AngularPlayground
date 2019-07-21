import { TestBed } from '@angular/core/testing';

import { Entity3Service } from './entity3.service';

describe('Entity3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Entity3Service = TestBed.get(Entity3Service);
    expect(service).toBeTruthy();
  });
});
