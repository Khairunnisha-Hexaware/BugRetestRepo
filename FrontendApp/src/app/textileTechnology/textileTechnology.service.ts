import { Injectable } from "@angular/core";
import { TextileTechnology } from "./textileTechnology";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TextileTechnologyService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getTextileTechnologyById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/textileTechnology/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  getTextileTechnology(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/textileTechnology`)
      .pipe(catchError(this.errorHandler));
  }

  addTextileTechnology(data: TextileTechnology): Observable<any> {
    return this.httpClient
      .post(
        `${this.endpoint}/textileTechnology`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  editTextileTechnology(id: any, data: TextileTechnology): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/textileTechnology/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteTextileTechnology(id: number): Observable<any> {
    return this.httpClient
      .delete(`${this.endpoint}/textileTechnology/${id}`, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  // Error handling
  errorHandler(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
