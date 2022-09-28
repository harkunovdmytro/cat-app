import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ICatRequestProperties } from '../interfaces/cat-request-properties.interface';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category.interface';
import { IBreed } from '../interfaces/breed.interface';
import { IContentItem } from '../interfaces/content-item.interface';

@Injectable()
export class CatService {
  constructor(private http: HttpClient) {
  }

  getBreeds() {
    return this.http.get<IBreed[]>('https://api.thecatapi.com/v1/breeds');
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('https://api.thecatapi.com/v1/categories');
  }

  getContent({
    categoryIds,
    breedIds,
    page,
    limit,
  }: ICatRequestProperties): Observable<HttpResponse<IContentItem[]>> {
    return this.http.get<IContentItem[]>(
      'https://api.thecatapi.com/v1/images/search',
      {
        params: {
          category_ids: categoryIds,
          breed_ids: breedIds,
          limit,
          page,
        },
        observe: 'response',
      });
  }
}
