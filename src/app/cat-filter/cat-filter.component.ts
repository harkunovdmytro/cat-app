import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormControl, FormGroup } from '@angular/forms';
import * as actions from '../cat-store/cat.action';
import { selectBreedsList, selectCategoriesList, selectContentQuantity } from '../cat-store/cat.selector';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-cat-filter',
    templateUrl: './cat-filter.component.html',
    styleUrls: ['./cat-filter.component.scss'],
})
export class CatFilterComponent implements OnInit, AfterViewInit, OnDestroy {
    catSelects = new FormGroup({
        category: new FormControl(''),
        breeds: new FormControl(''),
    });

    contentsQuantity$ = this.store.select(selectContentQuantity);

    categoriesList$ = this.store.select(selectCategoriesList);
    breedsList$ = this.store.select(selectBreedsList);

    unsubscribeAllSubjects$ = new Subject();

    pagination = {
        limit: 10,
        page: 0,
    };

    @ViewChild('paginator') paginator!: MatPaginator;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.getContent();

        this.store.dispatch(actions.loadBreeds());
        this.store.dispatch(actions.loadCategories());

        this.catSelects.valueChanges
            .pipe(takeUntil(this.unsubscribeAllSubjects$))
            .subscribe(() => this.getContent());
    }

    ngOnDestroy(){
        this.unsubscribeAllSubjects$.next(null);
    }

    ngAfterViewInit(): void {
        this.paginator.page.subscribe((paginatorValues: PageEvent) => this.changePagination(paginatorValues));
    }

    changePagination(pagination: PageEvent) {
        this.pagination.limit = pagination.pageSize;
        this.pagination.page = pagination.pageIndex;

        this.getContent();
    }

    private getContent(): void {
        this.store.dispatch(actions.loadContent({
            page: this.pagination.page,
            limit: this.pagination.limit,
            breedIds: String(this.catSelects.controls.breeds.value),
            categoryIds: String(this.catSelects.controls.category.value),
        }));
    }
}
