import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  public getFilterSet(): void {


    // const requestOptions = {
    //   headers: new HttpHeaders({responseType: 'text'})
    // };
    //
    // const headers = new HttpHeaders()
    //   .set("X-CustomHeader", "custom header value");
    //
    // this.http.get('https://api.hceu-performance.com/api/v2/filterset/120', headers).subscribe(data => {
    //
    // });

    // return this.http.get('https://api.hceu-performance.com/api/v2/filterset/120', {responseType: 'text', Authorization: ''}).pipe(catchError( error => {
    //   return throwError(error);
    // }));

    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer MzAxNzcxMWFhYTlmYTc3ZjI1YTMzMWY3YmNhYzg1ZGE0NDk4MzI0ZjJmNmYzMzIzZDk4Mjc3ZmY0MWEzY2EwMg');

    this.http.get('https://api.hceu-performance.com/api/v2/filterset/120', { headers }).subscribe(data => {
      console.log(data);
    });
  }

  public getFilterSet2(): Observable<any> {


    // const requestOptions = {
    //   headers: new HttpHeaders({responseType: 'text'})
    // };
    //
    // const headers = new HttpHeaders()
    //   .set("X-CustomHeader", "custom header value");
    //
    // this.http.get('https://api.hceu-performance.com/api/v2/filterset/120', headers).subscribe(data => {
    //
    // });

    // return this.http.get('https://api.hceu-performance.com/api/v2/filterset/120', {responseType: 'text', Authorization: ''}).pipe(catchError( error => {
    //   return throwError(error);
    // }));

    // const headers = new HttpHeaders()
    //   .set('Authorization', 'Bearer MzAxNzcxMWFhYTlmYTc3ZjI1YTMzMWY3YmNhYzg1ZGE0NDk4MzI0ZjJmNmYzMzIzZDk4Mjc3ZmY0MWEzY2EwMg');
    //
    // return this.http.get('https://api.hceu-performance.com/api/v2/filterset/120', { headers }).pipe(catchError( error => {
    //     return throwError(error);
    //   }));

    return this.http.get('https://api.hceu-performance.com/api/v2/filterset/120').pipe(catchError( error => {
      return throwError(error);
    }));
  }

}
