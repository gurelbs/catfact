import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { apiURL, favoriteUrl } from '../api';
interface ApiError {
  error: { message: string };
  status: number;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllFacts() {
    return this.http.get(apiURL).pipe(retry(1), catchError(this.handleError));
  }

  getFavorites() {
    return this.http
      .get(favoriteUrl)
      .pipe(retry(1), catchError(this.handleError));
  }
  handleError(err: { error: any; message: any; status: any }) {
    let errorMessage = '';
    const { error, message, status } = err;
    if (error instanceof ErrorEvent) {
      errorMessage = error.message;
    } else {
      errorMessage = `Error Code: ${status}\nMessage: ${message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }
}
