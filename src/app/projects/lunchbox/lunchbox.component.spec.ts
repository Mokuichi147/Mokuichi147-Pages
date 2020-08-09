import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchboxComponent } from './lunchbox.component';

describe('LunchboxComponent', () => {
  let component: LunchboxComponent;
  let fixture: ComponentFixture<LunchboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
