import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedLevel: null,
  selectedChoice: null, // Add selectedChoice to the initial state
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSelectedLevel: (state, action) => {
      state.selectedLevel = action.payload;
    },
    setSelectedChoice: (state, action) => {
      state.selectedChoice = action.payload;
    },
    setPlayerList: (state, action) => {
      state.playerList = action.payload;
    },
    setCurrentPayerID: (state, action) => {
      state.currentPayerID = action.payload;
    },
  },
});

const store = configureStore({
  reducer: appSlice.reducer,
});

export const { setSelectedLevel, setSelectedChoice, setPlayerList, setCurrentPayerID } = appSlice.actions;

export default store;
