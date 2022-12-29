import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    rootUrl = 'https://api.angular-email.com';

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
        return this.httpClient.post<SignupResponse>(
            `${this.rootUrl}/auth/signup`,
            {}
        );
    }
}
