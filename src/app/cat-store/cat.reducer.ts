import {createReducer, on} from "@ngrx/store";
import {Breed} from "../interfaces/breed";
import {Category} from "../interfaces/category";
import {ContentItem} from "../interfaces/content-item";
import * as actions from "./cat.action";

export interface CatState {
  breeds: Breed[];
  categories: Category[];
  content: ContentItem[];
  contentsQuantity: number;
};

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
    (state, {content, contentsQuantity}) => ({...state, content, contentsQuantity})
  ),
  on(
    actions.breedsLoaded,
    (state, {breeds}) => ({...state, breeds})
  ),
  on(
    actions.categoriesLoaded,
    (state, {categories}) => ({...state, categories})
  ),
);
