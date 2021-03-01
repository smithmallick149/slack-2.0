import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/appSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
	},
});
