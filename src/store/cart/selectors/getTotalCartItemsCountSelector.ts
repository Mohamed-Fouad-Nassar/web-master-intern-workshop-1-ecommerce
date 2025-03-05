import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store";

const getTotalCartItemsCountSelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalCartItemsCount =
      Object.values(items).reduce((acc, cur) => cur + acc, 0) || 0;
    return totalCartItemsCount;
  }
);

export default getTotalCartItemsCountSelector;
