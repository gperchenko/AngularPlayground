import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Entity1DetailsComponent } from './entity1-details.component';

describe('Entity1DetailsComponent', () => {
  let component: Entity1DetailsComponent;
  let fixture: ComponentFixture<Entity1DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Entity1DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Entity1DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
