import {
  FilterStatus,
  filterType,
} from "@/components/TaskComponents/types/typesFilter";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterSlice {
  filter: filterType;
}

const initialState: FilterSlice = {
  filter: FilterStatus.ALL,
};

export const FilterSlice = createSlice({
  name: "FilterSlice",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<filterType>) => {
      state.filter = action.payload;
    },
  },
});
