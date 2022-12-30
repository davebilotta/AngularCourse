import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    signedIn$: BehaviorSubject<boolean | null>;

    constructor(private authService: AuthService) {
        this.signedIn$ = this.authService.signedIn$;
    }

    ngOnInit() {
        this.authService.checkAuth().subscribe(() => {});

        // setTimeout(() => {
        //     this.authService.signout().subscribe(() => {});
        // }, 5000);
    }
}

// Old way
// export class AppComponent implements OnInit {
//     signedIn = false;

//     constructor(private authService: AuthService) {}

//     ngOnInit(): void {
//         this.authService.signedIn$.subscribe((signedIn) => {
//             this.signedIn = signedIn;
//         });
//     }
// }
