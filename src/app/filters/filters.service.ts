import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {FilterData} from '../models/filters.types';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private http: HttpClient) { }

  public getFilterSet(filterSetId: string): Observable<FilterData> {
    const url = `https://api.hceu-performance.com/api/v2/filterset/${filterSetId}`;
    return this.http.get(url)
      .pipe(map((result: any) => {
        return result.data;
      }));
  }

  public getFiltersForCompany(): Observable<FilterData[]> {
    const url = 'https://api.hceu-performance.com/api/v2/company/51/filterset';
    return this.http.get(url)
      .pipe(map((result: any) => {
        return result.data;
      }));
  }
}
