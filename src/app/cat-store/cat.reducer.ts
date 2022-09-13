import { createReducer, on } from "@ngrx/store";
import { CategoryContentItem } from "../interfaces/category-content-item";
import { CategoryItem } from "../interfaces/category-item";
import * as actions from "./cat.action";

export interface CatState {
    categoryItems: CategoryItem[];
    categoryContent: CategoryContentItem[];
    length: number;
};

export const breedEntity: CatState = {
    categoryItems: [],
    categoryContent: [],
    length: 0,
};

export const breedReducer = createReducer(
    breedEntity,
    on(actions.clearCategory, (state) => ({ ...state, categoryContent: [], length: 0 })),
    on(actions.categoryItemsLoaded, (state, { categoryItems }) => ({ ...state, categoryItems })),
    on(
        actions.categoryContentLoaded,
        (state, { categoryContent, length }) =>
            ({ ...state, categoryContent: categoryContent, length })
    ),
);