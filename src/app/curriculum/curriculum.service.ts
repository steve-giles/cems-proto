import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CurriculumData} from '../models/curriculum.types';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(private http: HttpClient) { }

  public getCurriculum(curriculumId: string): Observable<CurriculumData> {
    const url = `https://api.hceu-performance.com/api/v2/curriculum/${curriculumId}`;
    return this.http.get(url)
      .pipe(map((result: any) => {
        return result.data;
      }));
  }

  public getCurriculumForCompany(): Observable<CurriculumData[]> {
    const url = 'https://api.hceu-performance.com/api/v2/company/51/curriculum';
    return this.http.get(url)
      .pipe(map((result: any) => {
        return result.data;
      }));
  }
}
