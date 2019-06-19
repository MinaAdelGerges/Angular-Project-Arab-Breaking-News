import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentnewsComponent } from './departmentnews.component';

describe('DepartmentnewsComponent', () => {
  let component: DepartmentnewsComponent;
  let fixture: ComponentFixture<DepartmentnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
