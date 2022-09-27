import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import * as actions from './cat.action';
import { map, catchError, switchMap } from 'rxjs/operators';
import { CatService } from '../services/cat.service';
import { ICatRequestProperties } from '../interfaces/cat-request-properties';
import { ICategory } from '../interfaces/category';
import { IBreed } from '../interfaces/breed';
import { HttpResponse } from '@angular/common/http';
import { IContentItem } from '../interfaces/content-item';

@Injectable()
export class CatEffects {
    loadBreeds$ = createEffect(() => this.actions$.pipe(
            ofType(actions.loadBreeds),
            switchMap((): Observable<IBreed[]> => this.catService.getBreeds()),
        ).pipe(
            map(breeds => actions.breedsLoaded({ breeds })),
        ),
    );

    loadCategories$ = createEffect(() => this.actions$.pipe(
            ofType(actions.loadCategories),
            switchMap((): Observable<ICategory[]> => this.catService.getCategories()),
        ).pipe(
            map(categories => actions.categoriesLoaded({ categories })),
        ),
    );

    loadContent$ = createEffect(() => this.actions$.pipe(
            ofType(actions.loadContent),
            switchMap((getRequestProps: ICatRequestProperties) => {
                return this.catService.getContent(getRequestProps);
            }),
        ).pipe(
            map((contentResponce: HttpResponse<IContentItem[]>) => actions.contentLoaded({
                content: contentResponce.body || [],
                contentsQuantity: Number(contentResponce.headers.get('pagination-count')) ?? 0,
            })),
            catchError(() => EMPTY),
        ),
    );

    constructor(
        private actions$: Actions,
        private catService: CatService,
    ) {}
}
