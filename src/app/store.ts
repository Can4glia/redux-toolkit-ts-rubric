import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rubricSlice from './rubric/rubricSlice';

export const store = configureStore({
  reducer: {
    rubric: rubricSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
