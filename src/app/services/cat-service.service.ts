import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor(private http: HttpClient) { };

  getBreeds() {
    return this.http.get('https://api.thecatapi.com/v1/breeds');
  };

  getCats({ breed, page, limit }: { breed: string, page: number, limit: number }) {
    return this.http.get('https://api.thecatapi.com/v1/images/search', {
      params: {
        order: "Desc",
        breed_ids: breed,
        limit,
        page,
      },
      observe: 'response',
      headers: {
        'x-api-key': 'live_HZ6F0QwU6rUk6VGosWYIw3J62Q1cmu8kPbAQWF9zHfmJyqBjgoyiu2Rv3WqX1yLp',
      },
    });
  };
}
