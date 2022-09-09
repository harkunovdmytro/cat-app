import { createAction, props } from "@ngrx/store";
import { Breed } from "../interfaces/breed";

export const loadBreeds = createAction('Load Breeds');
export const breedsLoaded = createAction('Breeds Loaded', props<Breed>);