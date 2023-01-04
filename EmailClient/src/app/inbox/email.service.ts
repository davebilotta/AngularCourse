import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from './email';

export interface EmailSummary {
    id: string;
    subject: string;
    from: string;
}

@Injectable({
    providedIn: 'root',
})
export class EmailService {
    rootUrl = 'https://api.angular-email.com';

    constructor(private http: HttpClient) {}

    getEmails() {
        /* Gets a listing of all emails */
        return this.http.get<EmailSummary[]>(`${this.rootUrl}/emails`);
    }

    getEmail(id: string) {
        /* Gets a single email by id */
        return this.http.get<Email>(`${this.rootUrl}/emails/${id}`);
    }

    sendEmail(email: Email) {
        return this.http.post<Email>(`${this.rootUrl}/emails`, email);
    }
}
