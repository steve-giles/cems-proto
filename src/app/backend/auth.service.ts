import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {AuthenticatedResponse} from '../models/authenticate.types';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authorized = false;
  accessToken = '';

  constructor(private http: HttpClient) { }

  getAuthorizationToken(): string {
    return `Bearer ${this.accessToken}`;
  }

  checkAuthenticated(): boolean {
    return this.authorized;
  }

  login(username: string, password: string): void  {
    this.authenticate(username, password).subscribe(result => {
      console.log(result);
    })
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

    // const request = {
    //   client_id: '59v5635gu24o4scs8sc0cs8ckc08c0408wooosc8csgcww44cc',
    //   client_secret: '3ltm3u4aciyogk048kw0ckos8gsco4gcc0owck0w0ws8go4g8k',
    //   company_id: 1,
    //   password: 'test',
    //   url: 'company/{companyId}/login',
    //   username: 'alain+test@interstate21.com'
    // };

    // const request = {
    //   client_id: '59v5635gu24o4scs8sc0cs8ckc08c0408wooosc8csgcww44cc',
    //   client_secret: '3ltm3u4aciyogk048kw0ckos8gsco4gcc0owck0w0ws8go4g8k',
    //   password: 'Blue1234',
    //   username: 'steve@homeceuconnection.com'
    // };

    const url = 'https://api.hceu-performance.com/api/v2/company/1/login';

    return this.http.post(url, request).pipe(
      map((result: any) => {
        this.authorized = true;
        this.accessToken = result.data.access_token;
        return result;
      }),
      catchError(error => {
        return throwError(error);
      })
    );

    // try {
    //   let response = await this.http.post(request.url, request);
    //   let success  = LoginRequest.getSuccess(response);
    //   this.data.setState(success);
    //   return success;
    // } catch (err) {
    //   throw request.getError(err);
    // }
  }
}
