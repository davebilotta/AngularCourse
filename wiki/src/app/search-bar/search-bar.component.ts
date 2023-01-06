import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();

  term = "";

    constructor() { }

    ngOnInit(): void {
  }

    onInput(value: any): void {
      this.term = value;
      //console.log("My value is now " + this.term);
    }

    onSubmitForm(event: any): void {
      event.preventDefault();

      if (this.term.length > 0) {
        console.log(`Will submit value of ${this.term}`);
        this.submitted.emit(this.term);

        // Reset so it clears submitted value and goes back to Placeholder
        this.term = "";
      }
    }
}
