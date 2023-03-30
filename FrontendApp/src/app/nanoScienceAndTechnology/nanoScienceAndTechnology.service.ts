import { Injectable } from "@angular/core";
import { NanoScienceAndTechnology } from "./nanoScienceAndTechnology";
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
export class NanoScienceAndTechnologyService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getNanoScienceAndTechnologyById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/nanoScienceAndTechnology/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  getNanoScienceAndTechnology(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/nanoScienceAndTechnology`)
      .pipe(catchError(this.errorHandler));
  }

  addNanoScienceAndTechnology(data: NanoScienceAndTechnology): Observable<any> {
    return this.httpClient
      .post(
        `${this.endpoint}/nanoScienceAndTechnology`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  editNanoScienceAndTechnology(
    id: any,
    data: NanoScienceAndTechnology
  ): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/nanoScienceAndTechnology/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteNanoScienceAndTechnology(id: number): Observable<any> {
    return this.httpClient
      .delete(
        `${this.endpoint}/nanoScienceAndTechnology/${id}`,
        this.httpOptions
      )
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
