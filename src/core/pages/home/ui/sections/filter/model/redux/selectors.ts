import { createSelector } from '@reduxjs/toolkit';
import { FilterSliceTypes } from '../types';

const selectBase = createSelector(
   (state: RootState) => state,
   state => state.filter,
);

export const getPizzaFilterState = createSelector(
   selectBase,
   (state: FilterSliceTypes) => state,
);

export const getCollect = createSelector(
   selectBase,
   (state: FilterSliceTypes) => state.collect,
);

export const getNovelity = createSelector(
   selectBase,
   (state: FilterSliceTypes) => state.novelity,
);
