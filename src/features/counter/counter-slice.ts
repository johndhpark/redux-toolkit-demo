import { createSlice } from "@reduxjs/toolkit";

// DUCKS pattern

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 5,
};

const counterReducer = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value++;
		},
		decrement: (state) => {
			state.value--;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } =
	counterReducer.actions;

export default counterReducer.reducer;
