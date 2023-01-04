import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
    @Input() label: string;
    @Input() control: FormControl;
    @Input() inputType: string; // '' or 'password'
    @Input() controlType = 'input';

    constructor() {}

    ngOnInit(): void {}

    showErrors() {
        // He wasn't getting an error about this, figure out better way?
        if (!this.control) {
            return false;
        }
        const { dirty, touched, errors } = this.control;

        return dirty && touched && errors;
    }
}
