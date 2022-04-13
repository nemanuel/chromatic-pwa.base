import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ITest {
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private http: HttpClient
  ) { }

  getTest(): Observable<ITest> {
    return this.http.get<ITest>('api');
  }

}
