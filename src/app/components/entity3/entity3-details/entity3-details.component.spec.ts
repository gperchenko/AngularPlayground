import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Entity3DetailsComponent } from './entity3-details.component';

describe('Entity3DetailsComponent', () => {
  let component: Entity3DetailsComponent;
  let fixture: ComponentFixture<Entity3DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Entity3DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Entity3DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
