import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/appSlice';

export default configureStore({
	reducer: {
		app: counterReducer,
	},
});
