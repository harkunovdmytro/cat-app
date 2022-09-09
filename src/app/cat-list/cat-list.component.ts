import { Component, OnInit } from '@angular/core';
import { Cat } from '../interfaces/cat';
import { Store } from '@ngrx/store';
import { selectBreed } from '../cat-store/cat.selector';
import { breedsLoaded, loadBreeds } from '../cat-store/cat.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  cats: Cat[] = [];
  cats$!: Observable<Cat[]>;

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.store.dispatch(loadBreeds());

    this.store.select(selectBreed)
      .subscribe(
        (breeds: Cat[]) => this.cats = breeds
      );

    this.cats$ = this.store.select(selectBreed);
  };

}
