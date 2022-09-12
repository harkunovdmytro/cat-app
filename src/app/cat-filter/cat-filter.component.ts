import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadBreeds, loadCats } from '../cat-store/cat.action';
import { selectBreed, selectLength } from '../cat-store/cat.selector';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cat-filter',
  templateUrl: './cat-filter.component.html',
  styleUrls: ['./cat-filter.component.scss'],
})
export class CatFilterComponent implements OnInit, AfterViewInit {
  breeds$ = this.store.select(selectBreed);
  length$ = this.store.select(selectLength);

  breed!: string;
  limit = 10;
  page = 0;

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.store.dispatch(loadBreeds());
  };

  ngAfterViewInit() {
    this.paginator.page.subscribe((e) => this.changePagination(e));
  };

  getCats(breed: string) {
    this.breed = breed;
    this.page = 0;
    this.loadCats(breed);
  };

  changePagination(pagination: any) {
    this.limit = pagination.pageSize;
    this.page = pagination.pageIndex;
    this.loadCats(this.breed);
  };

  loadCats(breed: string) {
    if (this.breed)
      this.store.dispatch(loadCats({
        breed,
        page: this.page,
        limit: this.limit,
      }));
  };
}
