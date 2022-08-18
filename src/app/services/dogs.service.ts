import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dog } from '../models/dog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private _url: string = 'https://adopt-a-doge.herokuapp.com/doge'
  
  constructor(private http: HttpClient) {}

  getDogs(): Observable<Dog[]> {
    console.log(this.http.get<Dog[]>(this._url));
    return (this.http.get<Dog[]>(this._url));
  }

}
