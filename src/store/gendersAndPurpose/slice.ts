import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createPassword } from '../../api';

const SLICE_NAME = 'genders';

export const gendersAndPurposeFromBack = createAsyncThunk(
  SLICE_NAME,
  createPassword,
);

export interface gendersAndPurposeStore {
  loadStatus: LOAD_STATUSES_TYPES;
  genders: Record<string, string>;
  description_gender: Record<string, string>;
  purposes: Record<string, string>;
  sex: Record<string, string>;
}

export enum LOAD_STATUSES_TYPES {
  SET_LOADING = 'LOADING',
  SET_ERROR = 'ERROR',
  SET_LOADED = 'LOADED',
  SET_UNKNOWN = 'UNKNOWN',
}

const initialState: gendersAndPurposeStore = {
  loadStatus: LOAD_STATUSES_TYPES.SET_UNKNOWN,
  genders: {},
  description_gender: {},
  purposes: {},
  sex: {},
};

export const { reducer, actions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gendersAndPurposeFromBack.pending, (state, action) => {
      state.loadStatus = LOAD_STATUSES_TYPES.SET_LOADING;
    });
    builder.addCase(gendersAndPurposeFromBack.rejected, (state, action) => {
      state.loadStatus = LOAD_STATUSES_TYPES.SET_ERROR;
    });
    builder.addCase(gendersAndPurposeFromBack.fulfilled, (state, action) => {
      state.loadStatus = LOAD_STATUSES_TYPES.SET_LOADED;
      state.genders = action.payload.genders;
      state.description_gender = action.payload.discription_gender;
      state.purposes = action.payload.purposes;
      state.sex = action.payload.sex;
    });
  },
});

export const actionsGendersAndPurposes = { gendersAndPurposeFromBack };
