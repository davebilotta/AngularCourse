import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  disabled = true;
  // above is the same as
  /* constructor() {
    this.password = '';
  } */
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeLength(value: string) {
    const parsedLength = parseInt(value);
    console.log(`Parsed length is ${parsedLength}`);
    if (!isNaN(parsedLength)) {
      this.length = parsedLength;
    } else {
      this.length = 0;
    }
    console.log(`Length is ${this.length}`);
  }
  onButtonClick() {
    console.log(`About to generate a password with the following:
    Letters: ${this.includeLetters}
    Numbers: ${this.includeNumbers}
    Symbols: ${this.includeSymbols}
    Length: ${this.length}
    `);

    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const ltrIdx = Math.round(Math.random() * validChars.length) + 1;
      generatedPassword += validChars[ltrIdx];
    }
    this.password = generatedPassword;
  }

  getPassword() {
    return this.password;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
}
