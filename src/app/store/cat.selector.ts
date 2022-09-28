import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CatState } from './cat.reducer';

export const breedsStoreKey = 'breeds';
export const selectBreadsStore = createFeatureSelector<CatState>(breedsStoreKey);

export const selectCategories = createSelector(
    selectBreadsStore,
  (state: CatState) => state.categories,
);

export const selectBreeds = createSelector(
  selectBreadsStore,
  (state: CatState) => state.breeds,
);

export const selectContent = createSelector(
  selectBreadsStore,
  (state: CatState) => state.content,
);

export const selectContentQuantity = createSelector(
  selectBreadsStore,
  (state: CatState) => state.contentsQuantity,
);
