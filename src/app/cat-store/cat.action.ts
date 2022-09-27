import { createAction, props } from '@ngrx/store';
import { IBreed } from '../interfaces/breed';
import { ICategory } from '../interfaces/category';
import { IContentItem } from '../interfaces/content-item';
import { ICatRequestProperties } from '../interfaces/cat-request-properties';

export const loadCategories = createAction('Load Categories');

export const categoriesLoaded = createAction(
  'Categories Loaded',
  props<{ categories: ICategory[] }>(),
);

export const loadBreeds = createAction('Load Breeds');

export const breedsLoaded = createAction(
  'Breeds Loaded',
  props<{ breeds: IBreed[] }>(),
);

export const loadContent = createAction(
  'Load Content',
  props<ICatRequestProperties>(),
);

export const contentLoaded = createAction(
  'Content Loaded',
  props<{ content: IContentItem[], contentsQuantity: number }>(),
);
