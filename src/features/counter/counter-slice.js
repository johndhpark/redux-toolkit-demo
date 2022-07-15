import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

const counterReducer = createSlice({
	name: "counter",
	initialState,
	reducer: {
		increment: (state) => {
			state.value++;
		},
		decrement: (state) => {
			state.value--;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload.value;
		},
	},
});

export const { increment, decrement, incrementByAmount } =
	counterReducer.actions;

export default counterReducer.reducer;
