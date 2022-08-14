import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiPoint = createApi({
  reducerPath: "internal",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: () => ({}),
});
