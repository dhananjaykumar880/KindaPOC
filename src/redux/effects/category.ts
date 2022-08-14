import { ILabelValue } from "../interface/base";
import { apiPoint } from "./apiPoint";

const categoryApi = apiPoint.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query<Array<ILabelValue>, void>({
      query: () => `testdata/category.json`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetCategoryQuery } = categoryApi;
