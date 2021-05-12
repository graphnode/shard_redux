import { TypedUseSelectorHook, useSelector as useBaseSelector } from 'react-redux';
import type { RootState } from '../data/store';

const useSelector: TypedUseSelectorHook<RootState> = useBaseSelector;

export default useSelector;
