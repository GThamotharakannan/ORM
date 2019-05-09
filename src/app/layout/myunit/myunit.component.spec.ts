import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyunitComponent } from './myunit.component';

describe('MyunitComponent', () => {
  let component: MyunitComponent;
  let fixture: ComponentFixture<MyunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
