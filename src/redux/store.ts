import { configureStore } from '@reduxjs/toolkit';
import areasReducer from './areas';

export default configureStore({
  reducer: {
    areas: areasReducer,
  },
});
