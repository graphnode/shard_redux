import { useDispatch as useBaseDispatch } from 'react-redux';
import type { AppDispatch } from '../store';

const useDispatch = () => useBaseDispatch<AppDispatch>();

export default useDispatch;
