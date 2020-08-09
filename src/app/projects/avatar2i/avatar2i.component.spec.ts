import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Avatar2iComponent } from './avatar2i.component';

describe('Avatar2iComponent', () => {
  let component: Avatar2iComponent;
  let fixture: ComponentFixture<Avatar2iComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Avatar2iComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Avatar2iComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
