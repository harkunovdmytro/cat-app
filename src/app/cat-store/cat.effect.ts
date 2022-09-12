import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import { CatService } from "../services/cat-service.service";


@Injectable()
export class CatEffects {
    loadBreeds$ = createEffect(
        () => this.actions$.pipe(
            ofType('Load Breeds'),
            switchMap(() => (this.catService.getBreeds())),
        ).pipe(
            map((breeds) => ({ type: 'Breeds Loaded', breeds })),
            catchError(() => EMPTY)
        )
    );

    loadCats$ = createEffect(
        () => this.actions$.pipe(
            ofType('Load Cats'),
            switchMap((breed) => (this.catService.getCats(breed))),
        ).pipe(
            map((cats: any) => {
                console.log(cats.headers.get('pagination-count'))
                console.log(cats.headers.get('pagination-page'))
                console.log(cats)
                return {
                    type: 'Cats Loaded',
                    cats: cats.body,
                    search: {
                        page: cats.headers.get('pagination-page'),
                        length: cats.headers.get('pagination-count'),
                    }
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