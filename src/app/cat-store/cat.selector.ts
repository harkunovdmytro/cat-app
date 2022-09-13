import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CatState } from './cat.reducer';

export const selectLength = createSelector(
    createFeatureSelector('breeds'),
    (state: CatState) => state.length,
);

export const selectCategoryItems = createSelector(
    createFeatureSelector('breeds'),
    (state: CatState) => state.categoryItems,
);

export const selectCategoryContent = createSelector(
    createFeatureSelector('breeds'),
    (state: CatState) => state.categoryContent,
);

