import {createAction, props} from "@ngrx/store";
import {Breed} from "../interfaces/breed";
import {Category} from "../interfaces/category";
import {ContentItem} from "../interfaces/content-item";
import {CatRequestProperties} from '../interfaces/cat-request-properties'

export const loadCategories = createAction('Load Categories');

export const categoriesLoaded = createAction(
  'Categories Loaded',
  props<{ categories: Category[] }>()
);

export const loadBreeds = createAction('Load Breeds');

export const breedsLoaded = createAction(
  'Breeds Loaded',
  props<{ breeds: Breed[] }>()
);

export const loadContent = createAction(
  'Load Content',
  props<CatRequestProperties>()
);

export const contentLoaded = createAction(
  'Content Loaded',
  props<{ content: ContentItem[], contentsQuantity: number }>()
);
