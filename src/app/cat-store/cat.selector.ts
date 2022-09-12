import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CatState } from "./cat.reducer";

export const selectBreed = createSelector(
    createFeatureSelector('breeds'),
    (state: CatState) => state.breeds,
);

export const selectCats = createSelector(
    createFeatureSelector('breeds'),
    (state: CatState) => state.cats,
);

export const selectAll = createSelector(
    createFeatureSelector('breeds'),
    (state: CatState) => state
);

export const selectSearch = createSelector(
    createFeatureSelector('breeds'),
    (state: CatState) => state.search
);
export const selectLength = createSelector(
    createFeatureSelector('breeds'),
    (state: CatState) => state.search.length
);