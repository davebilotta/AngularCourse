import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../email';

@Component({
    selector: 'app-email-show',
    templateUrl: './email-show.component.html',
    styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
    email: Email;

    constructor(private route: ActivatedRoute) {
        // This is a fall back in case email is ever undefined
        this.email = this.route.snapshot.data.email;
        this.route.data.subscribe(({ email }) => {
            this.email = email;
        });
    }

    ngOnInit() {
        // this.route.params.subscribe((snapshot) => {
        //     this.emailService.getEmail(snapshot.id).subscribe()
        // });
        // this.route.params
        //     .pipe(
        //         switchMap(({ id }) => {
        //             return this.emailService.getEmail(id);
        //         })
        //     )
        //     .subscribe((email) => {
        //         console.log('Received', email);
        //         this.email = email;
        //     });
    }
}
