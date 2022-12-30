import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthHttpInterceptor } from './auth/auth-http-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
    declarations: [AppComponent],
    imports: [HttpClientModule, BrowserModule, AppRoutingModule, AuthModule],

    // This is how we "override" the dependency injection system
    providers: [
        {
            // we are telling Angular's dependency injection syste, if anyone else asks
            // for something of type HTTP_INTERCEPTORS, also give them a class of AuthHttpInterceptor
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHttpInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
