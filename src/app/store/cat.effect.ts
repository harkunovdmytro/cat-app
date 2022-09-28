import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import * as actions from './cat.action';
import { map, catchError, switchMap } from 'rxjs/operators';
import { CatService } from '../services/cat.service';
import { ICatRequestProperties } from '../interfaces/cat-request-properties.interface';
import { ICategory } from '../interfaces/category.interface';
import { IBreed } from '../interfaces/breed.interface';
import { HttpResponse } from '@angular/common/http';
import { IContentItem } from '../interfaces/content-item.interface';

@Injectable()
export class CatEffects {
  loadBreeds$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadBreeds),
    switchMap(() => this.catService.getBreeds().pipe(
      map(breeds => actions.breedsLoaded({ breeds })),
    )),
  ));

  loadCategories$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadCategories),
    switchMap(() => this.catService.getCategories().pipe(
      map(categories => actions.categoriesLoaded({ categories })),
    )),
  ));

  loadContent$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadContent),
    switchMap((getRequestProps: ICatRequestProperties) => this.catService.getContent(getRequestProps).pipe(
      map((contentResponce: HttpResponse<IContentItem[]>) => actions.contentLoaded({
        content: contentResponce.body || [],
        contentsQuantity: Number(contentResponce.headers.get('pagination-count')) ?? 0,
      })),
      catchError(map(() => actions.contentNotLoaded())),
    )),
  ));

  constructor(
    private actions$: Actions,
    private catService: CatService,
  ) {
  }
}
