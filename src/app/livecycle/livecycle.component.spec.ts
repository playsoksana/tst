import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivecycleComponent } from './livecycle.component';

describe('LivecycleComponent', () => {
  let component: LivecycleComponent;
  let fixture: ComponentFixture<LivecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
