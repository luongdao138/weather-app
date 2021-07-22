import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './reducers';

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
