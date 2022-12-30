import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEventType,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

// NOTE: doesn't use the "providedIn: 'root'" syntax like other Injectables
@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    constructor() {}

    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     throw new Error('Method not implemented.');
    // }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        //console.log('interceptor', req);
        // Modify (or log) the outgoing request
        // Need to do it this way because we can't do
        // 'req.withCredentials = true' since it is read-only
        const modifiedReq = req.clone({
            withCredentials: true,
            // Can modify other parameters here
        });

        //console.log('interceptor', modifiedReq);

        return next.handle(modifiedReq);
        // .pipe(
        //     tap((val) => {
        //         if (val.type === HttpEventType.Sent) {
        //             console.log('Request sent', val);
        //         }
        //         if (val.type === HttpEventType.Response) {
        //             console.log('Response received', val);
        //         }
        //     })
        // );
    }
}
