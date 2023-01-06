import { Component, ɵɵsetComponentScope } from '@angular/core';
import { faker } from '@faker-js/faker';
import { sentence } from 'txtgen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //randomText = sentence();
  success = false;
  randomText = faker.lorem.sentence();
  enteredText = '';

  compare(randomletter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomletter === enteredLetter ? 'correct' : 'incorrect';
  }

  onTextChange(value: string) {
    this.enteredText = value;
    if (value === this.randomText) {
      this.success = true;
    }
  }
}
