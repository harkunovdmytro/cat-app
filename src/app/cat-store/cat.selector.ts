import {createSelector, createFeatureSelector} from '@ngrx/store';
import {CatState} from './cat.reducer';

export const selectCategoriesList = createSelector(
  createFeatureSelector('breeds'),
  (state: CatState) => state.categories,
);

export const selectBreedsList = createSelector(
  createFeatureSelector('breeds'),
  (state: CatState) => state.breeds,
);

export const selectContent = createSelector(
  createFeatureSelector('breeds'),
  (state: CatState) => state.content,
);

export const selectContentQuantity = createSelector(
  createFeatureSelector('breeds'),
  (state: CatState) => state.contentsQuantity,
);
