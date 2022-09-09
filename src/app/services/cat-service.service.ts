import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor(private http: HttpClient) { };
  
  getBreeds() {
    return this.http.get('https://api.thecatapi.com/v1/breeds?limit=5');
  };
}
