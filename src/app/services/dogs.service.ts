import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dogs } from '../models/dogs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  private _url: string = 'https://adopt-a-doge.herokuapp.com/doges'
  constructor(private http: HttpClient) {}

  getDogs() {
    return this.http.get<Dogs[]>(this._url);
  }
}
