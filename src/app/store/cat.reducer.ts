import { createReducer, on } from '@ngrx/store';
import { IBreed } from '../interfaces/breed.interface';
import { ICategory } from '../interfaces/category.interface';
import { IContentItem } from '../interfaces/content-item.interface';
import * as actions from './cat.action';

export interface CatState {
    breeds: IBreed[];
    categories: ICategory[];
    content: IContentItem[];
    contentsQuantity: number;
}

export const breedEntity: CatState = {
    breeds: [],
    categories: [],
    content: [],
    contentsQuantity: 0,
};

export const breedReducer = createReducer(
    breedEntity,
    on(
        actions.contentLoaded,
        (state, { content, contentsQuantity }) => ({
            ...state,
            content,
            contentsQuantity,
        }),
    ),
    on(
        actions.breedsLoaded,
        (state, { breeds }) => ({ ...state, breeds }),
    ),
    on(
        actions.categoriesLoaded,
        (state, { categories }) => ({ ...state, categories }),
    ),
);
