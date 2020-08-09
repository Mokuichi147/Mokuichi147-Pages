import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArAppComponent } from './ar-app.component';

describe('ArAppComponent', () => {
  let component: ArAppComponent;
  let fixture: ComponentFixture<ArAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
