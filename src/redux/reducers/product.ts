import { createReducer } from "@reduxjs/toolkit";
import { evalError, STATUS } from "../constant/base";
import { getProductCategory, getProductList } from "../effects/product";
import { IProductState } from "../interface/product";

const initialState: IProductState = {
  category: {},
  products: {},
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getProductCategory.pending, (state) => {
      state.category = {
        ...STATUS.START,
        list: [],
      };
    })
    .addCase(getProductCategory.fulfilled, (state, action) => {
      state.category = {
        ...STATUS.COMPLETE,
        list: action.payload,
      };
    })
    .addCase(getProductCategory.rejected, (state, action) => {
      state.category = {
        ...STATUS.COMPLETE,
        error: evalError(action.error),
      };
    })
    .addCase(getProductList.pending, (state, action) => {
      state.products = {
        ...STATUS.START,
      };
    })
    .addCase(getProductList.fulfilled, (state, action) => {
      state.products = {
        ...STATUS.COMPLETE,
        ...action.payload,
      };
    })
    .addCase(getProductList.rejected, (state, action) => {
      state.products = {
        ...STATUS.COMPLETE,
        error: evalError(action.error),
      };
    });
});
