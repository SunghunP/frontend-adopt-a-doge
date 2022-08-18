import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dogs } from '../models/dogs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private _url: string = 'https://adopt-a-doge.herokuapp.com/doge'
  
  constructor(private http: HttpClient) {}

  getDogs(): Observable<Dogs[]> {
    return this.http.get<Dogs[]>(this._url);
  }
}
