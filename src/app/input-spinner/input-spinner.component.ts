import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-spinner',
  templateUrl: './input-spinner.component.html',
  styleUrls: ['./input-spinner.component.scss']
})
export class InputSpinnerComponent implements OnInit {

  @Input() label: string;
  @Input() step = 1;
  @Input() id: string;
  @Output() value = new EventEmitter<number>();

  inputValue: number;

  constructor() { }

  ngOnInit() {
  }

  onInputChanged(newValue: number) {
    this.inputValue = newValue;
    this.value.emit(this.inputValue);
  }

  increment() {
    if (!this.inputValue) { this.inputValue = 0; }
    if (!this.step) { this.step = 1; }

    this.onInputChanged(this.inputValue + (+this.step)); // + casts this.step to a number to avoid string concatenation
  }

  decrement() {
    if (!this.inputValue) { this.inputValue = 0; }
    if (!this.step) { this.step = 1; }

    this.onInputChanged(this.inputValue - this.step);
  }

}
