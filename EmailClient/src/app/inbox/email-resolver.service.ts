import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Email } from './email';
import { EmailService } from './email.service';
import { EMPTY } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class EmailResolverService implements Resolve<Email> {
    constructor(private emailService: EmailService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot) {
        const { id } = route.params;

        return this.emailService.getEmail(id).pipe(
            catchError(() => {
                this.router.navigateByUrl('/inbox/not-found');

                // Can return this in cases where we are required to return an Observable
                return EMPTY;
            })
        );
    }
}
