import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map, Observable, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Pass, Meta, Message } from '../models';

import { LocalStorageService } from '.';

@Injectable({
  providedIn: 'root',
})
export class PassService {
  readonly baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private storageService: LocalStorageService
  ) {}

  getPasses() {
    let url = this.baseUrl + '/' + this.storageService.getToken() + '/passes';

    return this.http.get<Meta>(url).pipe(
      map((p) => p.passes),
      tap((_) => console.log('fetched passes')),
      catchError(this.handleError<Pass[]>('getPasses', []))
    );
  }

  pushMessage(mess: Message) {
    let url =
      this.baseUrl + '/' + this.storageService.getToken() + '/message/push';

    return this.http
      .post<Message>(url, mess)
      .pipe(catchError(this.handleError<Message[]>('pushMessage', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
