import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator } from '@angular/forms';
import { map, catchError, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
    constructor(private authService: AuthService) {}

    validate = (control: AbstractControl) => {
        const { value } = control;

        //return control.value;
        return this.authService.usernameAvailable(value).pipe(
            map((value) => {
                if (value.available) {
                    // Note this isn't necessary since we'll only get here with success (200 status code)
                    return null;
                }
                console.log('Received value', value);
                return null;
            }),
            catchError((err) => {
                console.log(err);
                if (err.error.username) {
                    // we can use this instead of returning a new Observable
                    return of({
                        usernameTaken: true,
                    });
                } else {
                    return of({ noConnection: true });
                }
            })
        );
    };
}
