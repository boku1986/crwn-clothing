import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
  // when we example log out, only this selector will be fired, not the other two, because the other two are memoized
  console.log("selector 1 fired");
  return state.categories;
};

// memoized selector for categories array
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    console.log("selector 2 fired");
    return categoriesSlice.categories;
  }
);

// memoized selector for categories map...it means, as long as the categories array is not changed,
// the categories map will not be re-computed
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    console.log("selector 3 fired");
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
