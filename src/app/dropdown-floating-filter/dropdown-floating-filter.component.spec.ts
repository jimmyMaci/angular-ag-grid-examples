import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownFloatingFilterComponent } from './dropdown-floating-filter.component';

describe('DropdownFloatingFilterComponent', () => {
  let component: DropdownFloatingFilterComponent;
  let fixture: ComponentFixture<DropdownFloatingFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownFloatingFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownFloatingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
