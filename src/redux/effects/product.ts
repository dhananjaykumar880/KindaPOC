import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductCategory = createAsyncThunk(
  "product/category",
  async () => {
    const response = await fetch("/testdata/category.json");
    return response.json();
  }
);

export const getProductList = createAsyncThunk("product/list", async () => {
  const response = await fetch("/testdata/products.json");
  return response.json();
});
