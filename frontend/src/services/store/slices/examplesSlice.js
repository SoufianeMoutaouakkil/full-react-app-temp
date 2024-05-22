import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const examplesSlice = createSlice({
    name: "examples",
    initialState,
    reducers: {
        example: (state, action) => {
            console.log("test");
        },
    },
});

export const { example } = examplesSlice.actions;
export default examplesSlice.reducer;
