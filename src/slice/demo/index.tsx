import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GlassFilterSettings } from "../../models/demo-card.model";
import { defaultFilters } from "../../constants";

type UpdateFilterPayload = {
  key: keyof GlassFilterSettings;
  value: GlassFilterSettings[keyof GlassFilterSettings];
};

const initialState: { filters: GlassFilterSettings } = {
  filters: { ...defaultFilters },
};

const demoOptions = createSlice({
  name: "demoOptions",
  initialState,
  reducers: {
    updateFilters: (state, action: PayloadAction<GlassFilterSettings>) => {
      state.filters = action.payload;
    },
    updateFilter: (state, action: PayloadAction<UpdateFilterPayload>) => {
      const { key, value } = action.payload;
      state.filters[key] = value as never;
    },
    resetFilters: (state) => {
      state.filters = { ...defaultFilters };
    },
  },
});

export const { updateFilters, updateFilter, resetFilters } =
  demoOptions.actions;

export default demoOptions.reducer;
