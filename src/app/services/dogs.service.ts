import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dog } from '../models/dog';
import { Observable, of} from 'rxjs';

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

  getDog(id: string): Observable<Dog> {
    return this.http.get<Dog>(`${this._url}/${id}`);
  }

  createDog(data: any) {
    return this.http.post(`${this._url}`, data);
  }

  updateDog(id: string, data: any) {
    return this.http.put(`${this._url}/${id}`, data)
  }

  deleteDog(id: string) {
    return this.http.delete(`${this._url}/${id}`)
  }
}
