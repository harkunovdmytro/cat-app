import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class CatInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = new HttpHeaders()
            .set('x-api-key', 'live_HZ6F0QwU6rUk6VGosWYIw3J62Q1cmu8kPbAQWF9zHfmJyqBjgoyiu2Rv3WqX1yLp');

        const clonedRequest = req.clone({ headers });

        return next.handle(clonedRequest);
    }
}
