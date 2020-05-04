import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludesMatchFilterComponent } from './includes-match-filter.component';

describe('IncludesMatchFilterComponent', () => {
  let component: IncludesMatchFilterComponent;
  let fixture: ComponentFixture<IncludesMatchFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncludesMatchFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludesMatchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
