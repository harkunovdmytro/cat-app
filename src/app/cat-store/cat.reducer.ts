import { createReducer, on } from "@ngrx/store";
import { Breed } from "../interfaces/breed";
import { Cat } from "../interfaces/cat";
import { Search } from "../interfaces/search";
import * as actions from "./cat.action";

export type Breeds = Breed[];

export interface CatState {
    breeds: Breed[];
    cats: Cat[];
    search: Search;
};

export const breedEntity: CatState = {
    breeds: [],
    cats: [],
    search: {
        breed: null,
        page: 0,
        limit: 10,
        length: 0,
    },
};

export const breedReducer = createReducer(
    breedEntity,
    on(
        actions.breedsLoaded,
        (state, { breeds }) => ({ ...state, breeds }),
    ),
    on(actions.setBreed, (state, { breed }) => {
        console.log('actions.setBreed');
        return ({ ...state, search: { ...state.search, breed } })
    }),
    on(
        actions.catsLoaded,
        (state, { cats, search }) => {
            console.log(search)
            return {
                ...state,
                cats,
                search: {
                    ...state.search,
                    page: search.page,
                    length: search.length
                }
            }
        },
    )
);

function copyObject(obj: any) {
    return JSON.parse(JSON.stringify(obj));
}