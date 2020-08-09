import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArGrassesComponent } from './ar-grasses.component';

describe('ArGrassesComponent', () => {
  let component: ArGrassesComponent;
  let fixture: ComponentFixture<ArGrassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArGrassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArGrassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
