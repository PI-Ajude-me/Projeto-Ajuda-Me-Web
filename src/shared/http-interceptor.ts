import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';


@Injectable()
export class HttpInterceptorAuth implements HttpInterceptor{

    constructor(private router: Router){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem("pi_ajuda_me_access_token");
        if (token != null) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    Authorization: `bearer ${token}`
                }
            });
        }
        return next.handle(request).pipe(tap(() => {
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    localStorage.removeItem('pi_ajuda_me_access_token');
                    this.router.navigate(['/homepage']);
                }
            }
        }));

    }        

}