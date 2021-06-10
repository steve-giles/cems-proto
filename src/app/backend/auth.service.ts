import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {AuthenticatedResponse} from '../models/authenticate.types';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authorized = false;
  accessToken = '';

  // public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  getAuthorizationToken(): string {
    return `Bearer ${this.accessToken}`;
  }

  checkAuthenticated(): boolean {
    return this.authorized;
  }

  login(username: string, password: string): void  {
    this.authenticate(username, password).subscribe(
      result => {
      debugger;
      console.log(result);
      },
        error => {
      debugger;
      console.log(error);
    });
  }

  authenticate(username: string, password: string): Observable<AuthenticatedResponse> {
    const request = {
      client_id: '59v5635gu24o4scs8sc0cs8ckc08c0408wooosc8csgcww44cc',
      client_secret: '3ltm3u4aciyogk048kw0ckos8gsco4gcc0owck0w0ws8go4g8k',
      company_id: 1,
      password: `${password}`,
      url: 'company/{companyId}/login',
      username: `${username}`
    };

    const url = 'https://api.hceu-performance.com/api/v2/company/1/login';

    return this.http.post(url, request).pipe(
      map((result: any) => {
        this.authorized = true;
        this.accessToken = result.data.access_token;

        // this.isAuthenticated.next(true);

        return result;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  async logout(redirect: string): Promise<void> {
    try {
      // await this.authClient.signOut();
      //this.isAuthenticated.next(false);
      await this.router.navigate([redirect]);
    } catch (err) {
      console.error(err);
    }
  }

  validToken(token: string): Observable<boolean> {
    const url = 'https://api.hceu-performance.com/api/v2/license-type';
    return this.http.get(url).pipe(
        map((result: any) => {
        return true;
      }),
      catchError( error => {
        return throwError(error);
      })
    );

  }
}
