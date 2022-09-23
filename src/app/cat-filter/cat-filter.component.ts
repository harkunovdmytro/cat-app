import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {FormControl, FormGroup} from '@angular/forms';
import * as actions from '../cat-store/cat.action';
import {selectBreedsList, selectCategoriesList, selectContentQuantity} from '../cat-store/cat.selector';

@Component({
  selector: 'app-cat-filter',
  templateUrl: './cat-filter.component.html',
  styleUrls: ['./cat-filter.component.scss'],
})
export class CatFilterComponent implements OnInit, AfterViewInit {
  catSelects = new FormGroup({
    category: new FormControl(''),
    breeds: new FormControl(''),
  });

  contentsQuantity$ = this.store.select(selectContentQuantity);

  categoriesList$ = this.store.select(selectCategoriesList);
  breedsList$ = this.store.select(selectBreedsList);

  breedId = '';
  categoryId = '';
  limit = 10;
  page = 0;

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(private store: Store) {
  };

  ngOnInit(): void {
    this.getContent();

    this.store.dispatch(actions.loadBreeds());
    this.store.dispatch(actions.loadCategories());

    this.catSelects.controls.breeds.valueChanges.subscribe((breedId): void => {
      if (this.categoryId !== '') {
        this.catSelects.controls.category.reset();
      }

      this.breedId = breedId + '';
      this.categoryId = ''

      this.getContent();
    })

    this.catSelects.controls.category.valueChanges.subscribe((categoryId): void => {
      if (this.breedId !== '') {
        this.catSelects.controls.breeds.reset();
      }

      this.categoryId = categoryId + '';
      this.breedId = '';

      this.getContent();
    })
  };

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(((paginatorValues: PageEvent) => this.changePagination(paginatorValues)));
  }

  changePagination(pagination: PageEvent) {
    this.limit = pagination.pageSize;
    this.page = pagination.pageIndex;

    this.getContent();
  };

  private getContent(): void {
    this.store.dispatch(actions.loadContent({
      page: this.page,
      limit: this.limit,
      breed_ids: this.breedId,
      category_ids: this.categoryId,
    }));
  }
}
