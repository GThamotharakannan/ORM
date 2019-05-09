import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignUnitComponent } from './assign-unit.component';

describe('AssignUnitComponent', () => {
  let component: AssignUnitComponent;
  let fixture: ComponentFixture<AssignUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
