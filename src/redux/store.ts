import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "@/redux/features/cart/cartSlice";
import compareSliceReducer from "@/redux/features/compare/compareSlice";
export const store = configureStore({
  reducer: { cartSlice: cartSliceReducer, compareSlice: compareSliceReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;