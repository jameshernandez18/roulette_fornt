import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/Authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,
                private router: Router) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.authorization) {
            request = request.clone({
                setHeaders: {
                    authorization: `Bearer ${currentUser.authorization}`
                }
            });
        }

        return next.handle(request).pipe(
            catchError((err) => {
                if (err.status === 401) {
                    this.authenticationService.logout();
                    this.router.navigate(['/login']);
                }

                return throwError(err);
            })
        );
    }
}
