import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor(private http: HttpClient) { };

  getCategoryItems(categoryName: string) {
    return this.http.get('https://api.thecatapi.com/v1/' + categoryName, {
      headers: {
        'x-api-key': 'live_HZ6F0QwU6rUk6VGosWYIw3J62Q1cmu8kPbAQWF9zHfmJyqBjgoyiu2Rv3WqX1yLp',
      },
      observe: "response"
    });
  };

  getCategoryContent(
    { category, categoryId, page, limit }:
      {
        category: string,
        categoryId: string,
        page: number,
        limit: number
      }
  ) {
    return this.http.get(
      'https://api.thecatapi.com/v1/images/search',
      {
        params: {
          [category]: categoryId,
          limit,
          page,
        },
        headers: {
          'x-api-key': 'live_HZ6F0QwU6rUk6VGosWYIw3J62Q1cmu8kPbAQWF9zHfmJyqBjgoyiu2Rv3WqX1yLp',
        },
        observe: "response"
      })
  }
}
