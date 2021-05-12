import { useDispatch as useBaseDispatch } from 'react-redux';
import type { AppDispatch } from '../data/store';

const useDispatch = () => useBaseDispatch<AppDispatch>();

export default useDispatch;
