import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class CaseService {
    apiUrl = 'api/Case';

    constructor(
        private http: HttpClient,
    ) { }

    getCaseByCaseNumber(caseNumber: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/case-number/${caseNumber}`, { headers: this.headers }).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }


    get headers(): HttpHeaders {
        return new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    protected handleError(err): Observable<never> {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = err.error.message;
        } else {
            errorMessage = `Backend returned code ${err.status}, body was: ${err.message}`;
        }
        return throwError(errorMessage);
    }
}
