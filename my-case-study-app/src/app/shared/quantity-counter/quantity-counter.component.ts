import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-counter',
  templateUrl: './quantity-counter.component.html',
  styleUrls: ['./quantity-counter.component.css']
})
export class QuantityCounterComponent implements OnInit {

  qty: number = 0;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.qty += 1;
  }

  decrement() {
    this.qty -= 1;
  }

}
