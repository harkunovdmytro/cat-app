import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import { CatService } from "../services/cat-service.service";


@Injectable()
export class CatEffects {
    loadCategoryItems$ = createEffect(
        () => this.actions$.pipe(
            ofType('Load Category Items'),
            switchMap(({ searching }) => this.catService.getCategoryItems(searching)),
        ).pipe(
            map((categoryContent: any) => {
                console.log(categoryContent)
                return {
                    type: 'Category Items Loaded',
                    categoryItems: categoryContent.body,
                    length: categoryContent.headers.get('pagination-count'),
                }
            }),
            catchError(() => EMPTY)
        )
    );

    loadCategoryList$ = createEffect(
        () => this.actions$.pipe(
            ofType('Load Category Content'),
            switchMap((props) => (this.catService.getCategoryContent(props))),
        ).pipe(
            map((content) => {
                return {
                    type: 'Category Content Loaded',
                    categoryContent: content.body,
                    length: content.headers.get('pagination-count')
                }
            }),
            catchError(() => EMPTY)
        )
    );


    constructor(
        private actions$: Actions,
        private catService: CatService,
    ) { };
}