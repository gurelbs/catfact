import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { apiURL, favoriteUrl, mainApiUrl, breedsApi } from '../api';
import { CatFact } from '../types';
interface ApiError {
  error: { message: string };
  status: number;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  user: any = localStorage.getItem('user');
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  createUser(userDetails: {
    nickname: string;
    email: string;
  }): Observable<any> {
    return this.http
      .post(`${mainApiUrl}/users`, { userDetails })
      .pipe(retry(1), catchError(this.handleError));
  }

  getAllFacts() {
    return this.http.get(apiURL).pipe(retry(1), catchError(this.handleError));
  }

  postFavorite(fact: CatFact, user: any) {
    return this.http
      .post(favoriteUrl, { factDetails: fact, user }, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  getFavorites() {
    return this.http
      .get(favoriteUrl, { params: { user: this.user } })
      .pipe(retry(1), catchError(this.handleError));
  }

  getBreeds() {
    return this.http
      .get(breedsApi)
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
