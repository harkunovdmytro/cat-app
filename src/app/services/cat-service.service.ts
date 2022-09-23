import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CatModule} from '../cat-module/cat.module';
import {CatRequestProperties} from "../interfaces/cat-request-properties";

@Injectable({
  providedIn: CatModule,
})
export class CatService {
  constructor(private http: HttpClient) {
  }

  getBreeds() {
    return this.http.get('https://api.thecatapi.com/v1/breeds',
      {
        headers: {
          'x-api-key': 'live_HZ6F0QwU6rUk6VGosWYIw3J62Q1cmu8kPbAQWF9zHfmJyqBjgoyiu2Rv3WqX1yLp',
        },
      });
  }

  getCategories() {
    return this.http.get('https://api.thecatapi.com/v1/categories',
      {
        headers: {
          'x-api-key': 'live_HZ6F0QwU6rUk6VGosWYIw3J62Q1cmu8kPbAQWF9zHfmJyqBjgoyiu2Rv3WqX1yLp',
        },
      })
  }

  getContent({category_ids, breed_ids, page, limit}: CatRequestProperties) {
    return this.http.get(
      'https://api.thecatapi.com/v1/images/search',
      {
        params: {
          category_ids,
          breed_ids,
          limit,
          page,
        },
        headers: {
          'x-api-key': 'live_HZ6F0QwU6rUk6VGosWYIw3J62Q1cmu8kPbAQWF9zHfmJyqBjgoyiu2Rv3WqX1yLp',
        },
        observe: "response",
      })
  }
}
