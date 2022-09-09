import { createReducer, on } from "@ngrx/store";
import { Breed } from "../interfaces/breed";
import { Cat } from "../interfaces/cat";
import { breedsLoaded, loadBreeds } from "./cat.action";

export type Breeds = Breed[];

export interface CatState {
    breeds: Breed[],
}

export const breedEntity: CatState = {
    breeds: [{
        id: 1,
        name: 'Whity'
    },]
};

export const breedReducer = createReducer(
    breedEntity,
    on(
        breedsLoaded,
        (_, payload: any) => ({ breeds: payload.breeds })
    ),
    on(loadBreeds, (entity) => entity)
);