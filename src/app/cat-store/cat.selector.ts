import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Breed } from "../interfaces/breed";

export const selectBreed = createSelector(
    createFeatureSelector('breed'),
    (breeds: Breed[]) => breeds,
);