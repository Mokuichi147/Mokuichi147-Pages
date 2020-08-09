import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfGuiComponent } from './sf-gui.component';

describe('SfGuiComponent', () => {
  let component: SfGuiComponent;
  let fixture: ComponentFixture<SfGuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfGuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfGuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
