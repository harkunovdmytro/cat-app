import { createAction, props } from "@ngrx/store";
import { Breed } from "../interfaces/breed";
import { Cat } from "../interfaces/cat";

export const loadBreeds = createAction('Load Breeds');
export const breedsLoaded = createAction('Breeds Loaded', props<{ breeds: Breed[] }>());

export const setBreed = createAction('Set Breed', props<{ breed: string }>())

export const loadCats = createAction(
    'Load Cats',
    props<{
        breed: string,
        page: number,
        limit: number
    }>());

export const catsLoaded = createAction(
    'Cats Loaded',
    props<{
        cats: Cat[], search: {
            page: number;
            length: number;
        }
    }>());

