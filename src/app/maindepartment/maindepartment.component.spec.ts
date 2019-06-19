import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindepartmentComponent } from './maindepartment.component';

describe('MaindepartmentComponent', () => {
  let component: MaindepartmentComponent;
  let fixture: ComponentFixture<MaindepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
