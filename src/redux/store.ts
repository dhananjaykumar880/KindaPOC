import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { apiPoint } from './effects/apiPoint';
import productReducer from './reducers/product';

const rootReducer = combineReducers({
  [apiPoint.reducerPath]: apiPoint.reducer,
  product: productReducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([apiPoint.middleware]),
    preloadedState,
    devTools: process.env.NODE_ENV === 'development'
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
