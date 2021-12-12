import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBlockComponent } from './cards-block.component';

describe('CardsBlockComponent', () => {
  let component: CardsBlockComponent;
  let fixture: ComponentFixture<CardsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
