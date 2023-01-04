import { Component, Input } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
    selector: 'app-email-reply',
    templateUrl: './email-reply.component.html',
    styleUrls: ['./email-reply.component.css'],
})
export class EmailReplyComponent {
    showModal = false;
    @Input() email: Email;

    constructor(private emailService: EmailService) {}

    ngOnChanges() {
        const text = this.email.text.replace(/\n/gi, '\n> ');
        // Need to do this because on a *reply*, the from becomes the to and vice-versa
        this.email = {
            ...this.email,
            from: this.email.to,
            to: this.email.from,
            // can format subject here too, by adding "re: " in front, for example

            text: `\n\n\n---------- ${this.email.from} wrote: ----------\n> ${text}`,
        };
    }

    onSubmit(email: Email) {
        this.emailService
            .sendEmail(email)
            .subscribe(() => (this.showModal = false));
    }
}
