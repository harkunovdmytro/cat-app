import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../cat-store/cat.action';
import { selectCategoryContent, selectCategoryItems, selectLength } from '../cat-store/cat.selector';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cat-filter',
  templateUrl: './cat-filter.component.html',
  styleUrls: ['./cat-filter.component.scss'],
})
export class CatFilterComponent implements OnInit, AfterViewInit {
  form = new FormGroup({
    category: new FormControl(''),
    categoryItem: new FormControl(''),
  });

  categories = [
    { name: 'Category', items: 'categories', searchParam: 'category_ids' },
    { name: 'Breed', items: 'breeds', searchParam: 'breed_ids' },
  ];

  length$ = this.store.select(selectLength);
  categoryItems$ = this.store.select(selectCategoryItems);
  categoryContent$ = this.store.select(selectCategoryContent);

  limit = 10;
  page = 0;

  currentCategory = '';
  currentCategoryIdName = '';
  currentCategoryId = '';

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.form.get('category')?.valueChanges.subscribe(
      (categoryId) => {
        this.page = 0;
        this.store.dispatch(actions.clearCategory());
        this.currentCategory = this.categories[Number(categoryId)].items;
        this.currentCategoryIdName = this.categories[Number(categoryId)].searchParam;
        this.getCategoryItems(this.currentCategory);
      }
    );

    this.form.get('categoryItem')?.valueChanges.subscribe(
      (categoryItemId) => {
        this.page = 0;
        this.currentCategoryId = '' + categoryItemId;
        this.getCategoryContent();
      }
    );
  };

  ngAfterViewInit() {
    this.paginator.page.subscribe((e) => this.changePagination(e));
  };

  getCategoryItems(searching: string | null) {
    console.log('searching: ' + searching)
    if (searching) {
      this.store.dispatch(actions.loadCategoryItems({ searching: (<string>searching) }));
    }
  }

  changePagination(pagination: any) {
    this.limit = pagination.pageSize;
    this.page = pagination.pageIndex;
    this.getCategoryContent();
  };

  getCategoryContent() {
    if (this.currentCategory && this.currentCategoryId)
      this.store.dispatch(actions.loadCategoryContent({
        category: this.currentCategoryIdName,
        categoryId: this.currentCategoryId,
        page: this.page,
        limit: this.limit,
      }));
  }
}
