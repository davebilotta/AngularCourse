import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Email } from '../email';

@Component({
    selector: 'app-email-form',
    templateUrl: './email-form.component.html',
    styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
    @Input() email: Email;
    @Output() emailSubmit = new EventEmitter();

    emailForm: FormGroup;

    constructor() {}

    ngOnInit() {
        const { subject, from, to, text } = this.email;

        this.emailForm = new FormGroup({
            to: new FormControl(to, [Validators.required, Validators.email]),
            from: new FormControl({ value: from, disabled: true }),
            subject: new FormControl(subject, [Validators.required]),
            text: new FormControl(text, [Validators.required]),
        });
    }

    onSubmit() {
        /* Will send an email */
        if (this.emailForm.invalid) {
            return;
        }

        // At this point the form is missing the 'from' field since we marked it as disabled
        //console.log('Submitting', this.emailForm.getRawValue());
        this.emailSubmit.emit(this.emailForm.value);
    }
}
