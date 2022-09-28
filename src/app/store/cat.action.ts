import { createAction, props } from '@ngrx/store';
import { IBreed } from '../interfaces/breed.interface';
import { ICategory } from '../interfaces/category.interface';
import { IContentItem } from '../interfaces/content-item.interface';
import { ICatRequestProperties } from '../interfaces/cat-request-properties.interface';

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

export const contentNotLoaded = createAction('Content Not Loaded');
