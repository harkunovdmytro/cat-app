import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import { CatService } from "../services/cat-service.service";


@Injectable()
export class CatEffects {
    loadBreeds$ = createEffect(
        () => this.actions.pipe(
            ofType('Load Breeds'),
            switchMap(() => (this.catService.getBreeds())),
        ).pipe(
            map((breeds) => ({ type: 'Breeds Loaded', payload: breeds })),
            catchError(() => EMPTY)
        )
    );

    constructor(
        private actions: Actions,
        private catService: CatService,
    ) { };
}