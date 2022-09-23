import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap} from 'rxjs/operators';
import {CatService} from '../services/cat-service.service';
import {CatRequestProperties} from "../interfaces/cat-request-properties";

@Injectable()
export class CatEffects {
  loadBreeds$ = createEffect(
    () => this.actions$
      .pipe(
        ofType('Load Breeds'),
        switchMap(() => this.catService.getBreeds()),
      ).pipe(
        map((breeds) => ({type: 'Breeds Loaded', breeds}))
      )
  );

  loadCategories$ = createEffect(
    () => this.actions$
      .pipe(
        ofType('Load Categories'),
        switchMap(() => this.catService.getCategories())
      ).pipe(
        map((categories) => ({type: 'Categories Loaded', categories}))
      )
  );

  loadContent$ = createEffect(
    () => this.actions$.pipe(
      ofType('Load Content'),
      switchMap((getRequestProps: CatRequestProperties) => (this.catService.getContent(getRequestProps))),
    ).pipe(
      map((contentResponce) => {
        return {
          type: 'Content Loaded',
          content: contentResponce.body,
          contentsQuantity: contentResponce.headers.get('pagination-count')
        }
      }),
      catchError(() => EMPTY),
    )
  );

  constructor(
    private actions$: Actions,
    private catService: CatService,
  ) {
  };
}
