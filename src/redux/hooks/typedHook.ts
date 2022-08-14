import { AppDispatch, RootState } from "../store"
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

export const useTypedDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;