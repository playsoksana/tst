import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivecyclebtnComponent } from './livecyclebtn.component';

describe('LivecyclebtnComponent', () => {
  let component: LivecyclebtnComponent;
  let fixture: ComponentFixture<LivecyclebtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivecyclebtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivecyclebtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
