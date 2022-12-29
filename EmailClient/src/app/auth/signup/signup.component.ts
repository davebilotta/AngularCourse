import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';
import { SignupCredentials } from '../auth.service';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    constructor(
        private matchPassword: MatchPassword,
        private uniqueUsername: UniqueUsername,
        private authService: AuthService
    ) {}

    authForm = new FormGroup(
        {
            username: new FormControl(
                '',
                // Synchronous validators here
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(20),
                    Validators.pattern(/^[a-z0-9]+$/),
                ],
                // Async validators here
                [this.uniqueUsername.validate]
            ),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(20),
            ]),
            passwordConfirmation: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(20),
            ]),
        },
        {
            validators: [this.matchPassword.validate],
        }
    );

    ngOnInit(): void {}

    onSubmit() {
        // Check that form is valid
        if (this.authForm.invalid) {
            return;
        }

        // Will get back an RxJs observable
        this.authService
            .signup(this.authForm.value as SignupCredentials)
            .subscribe({
                next: (resp) => {
                    // We want to navigate to some other route
                    console.log('Success', resp);
                },
                //complete() {},
                error: (err) => {
                    if (err.status === 0) {
                        // Force validation error
                        this.authForm.setErrors({
                            noConnection: true,
                        });
                    } else {
                        this.authForm.setErrors({
                            unknownError: true,
                        });
                    }
                },
            });
    }
}
