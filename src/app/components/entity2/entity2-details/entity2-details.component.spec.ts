import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Entity2DetailsComponent } from './entity2-details.component';

describe('Entity2DetailsComponent', () => {
  let component: Entity2DetailsComponent;
  let fixture: ComponentFixture<Entity2DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Entity2DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Entity2DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
