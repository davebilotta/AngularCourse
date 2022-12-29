import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UsernameAvailableResponse {
    available: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private httpClient: HttpClient) {}

    usernameAvailable(username: string) {
        return this.httpClient.post<UsernameAvailableResponse>(
            'https://api.angular-email.com/auth/username',
            {
                username: username,
            }
        );
    }
}
