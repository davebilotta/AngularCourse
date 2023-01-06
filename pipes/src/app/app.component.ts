import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  payeeName: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onPayeeChange(value: string) {
    //console.log(`Received value ${value}`);
    this.payeeName = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onAmountChange(amount: number) {
    this.amount = amount;
  }

  onHeightChange(height: string) {
    this.height = parseFloat(height);
  }

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }
}
