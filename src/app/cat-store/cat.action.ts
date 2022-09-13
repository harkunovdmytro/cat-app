import { createAction, props } from "@ngrx/store";
import { CategoryContentItem } from "../interfaces/category-content-item";

export const clearCategory = createAction('Clear Category Content');

export const loadCategoryItems = createAction(
    'Load Category Items',
    props<{ searching: string }>()
);

export const categoryItemsLoaded = createAction(
    'Category Items Loaded',
    props<{ categoryItems: { id: number | string, name: string }[] }>()
);

export const loadCategoryContent = createAction(
    'Load Category Content',
    props<{
        category: string,
        categoryId: string,
        page: number,
        limit: number
    }>()
)

export const categoryContentLoaded = createAction(
    'Category Content Loaded',
    props<{ categoryContent: CategoryContentItem[], length: number }>()
);