import { configureStore } from "@reduxjs/toolkit";
import demoOptions from "../slice/demo/index";

export const store = configureStore({
  reducer: {
    demoOptions: demoOptions,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
