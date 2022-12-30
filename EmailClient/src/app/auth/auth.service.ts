import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

interface UsernameAvailableResponse {
    available: boolean;
}

export interface SignupCredentials {
    username: string;
    password: string;
    passwordConfirmation: string;
}

interface SignupResponse {
    username: string;
}

export interface SigninCredentials {
    username: string | undefined | null;
    password: string | undefined | null;
}

interface SigninResponse {
    username: string;
}

interface AuthenticationResponse {
    authenticated: boolean;
    username: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    rootUrl = 'https://api.angular-email.com';
    signedIn$ = new BehaviorSubject<boolean | null>(null); // '$' is convention for an Observable

    constructor(private httpClient: HttpClient) {}

    usernameAvailable(username: string) {
        return this.httpClient.post<UsernameAvailableResponse>(
            `${this.rootUrl}/auth/username`,
            {
                username: username,
            }
        );
    }

    signup(credentials: SignupCredentials) {
        return this.httpClient
            .post<SignupResponse>(
                `${this.rootUrl}/auth/signup`,
                credentials
                // This is because httpClient discards cookies by default
                // NOTE: This will eventually be handled by http interceptor
                //{ withCredentials: true }
            )
            .pipe(
                // Error coming out of response will skip 'tap', which is what we want
                tap(() => {
                    this.signedIn$.next(true);
                })
            );
    }

    signin(credentials: SigninCredentials) {
        return this.httpClient
            .post(`${this.rootUrl}/auth/signin`, credentials)
            .pipe(
                tap(() => {
                    this.signedIn$.next(true);
                })
            );
    }

    signout() {
        return this.httpClient.post(`${this.rootUrl}/auth/signout`, {}).pipe(
            tap(() => {
                console.log('USER IS NOW SIGNED OUT');
                this.signedIn$.next(false);
            })
        );
    }

    checkAuth() {
        /* Checks user's authentication status */
        return this.httpClient
            .get<AuthenticationResponse>(
                `${this.rootUrl}/auth/signedin`
                // This is because httpClient discards cookies by default
                // NOTE: This will eventually be handled by http interceptor
                //{ withCredentials: true }
            )
            .pipe(
                tap(({ username, authenticated }) => {
                    // console.log(
                    //     'checkAuth() user:',
                    //     username,
                    //     'is authenticated:',
                    //     authenticated
                    // );

                    this.signedIn$.next(authenticated);
                })
            );
    }
}
