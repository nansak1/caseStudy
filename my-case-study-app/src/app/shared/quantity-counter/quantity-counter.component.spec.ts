import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityCounterComponent } from './quantity-counter.component';

describe('QuantityCounterComponent', () => {
  let component: QuantityCounterComponent;
  let fixture: ComponentFixture<QuantityCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment by 1', () => {
    component.qty = 2;
    component.increment();
    expect(component.qty).toBe(3);
  });

  it('should subtract by 1', () => {
    component.qty = 5;
    component.decrement();
    expect(component.qty).toBe(4);
  });
});
