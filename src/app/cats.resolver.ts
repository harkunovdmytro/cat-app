import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectBreeds } from './store/cat.selector';
import { map } from 'rxjs/operators';
import { IBreed } from './interfaces/breed.interface';

@Injectable({
  providedIn: 'root',
})
export class CatsResolver implements Resolve<boolean> {
  constructor(private store: Store) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    console.log('resolved');
    return this.store.select(selectBreeds)
      .pipe(map((items: IBreed[]) => items.length !== 0));
  }
}
