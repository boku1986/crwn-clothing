import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
  // when we example log out, only this selector will be fired, not the other two, because the other two are memoized
  return state.categories;
};

// memoized selector for categories array
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories;
  }
);

// memoized selector for categories map...it means, as long as the categories array is not changed,
// the categories map will not be re-computed
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categoriesSlice) => {
    return categoriesSlice.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.isLoading;
  }
);
