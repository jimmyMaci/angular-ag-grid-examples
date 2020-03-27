import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridSimpleComponent } from './ag-grid-simple.component';

describe('AgGridSimpleComponent', () => {
  let component: AgGridSimpleComponent;
  let fixture: ComponentFixture<AgGridSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
