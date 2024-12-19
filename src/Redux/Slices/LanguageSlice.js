import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: "tamil", // Default language
};

const LanguageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        toggleLanguage: (state) => {
            state.language = state.language === "tamil" ? "english" : "tamil";
        },
    },
});

export const { toggleLanguage } = LanguageSlice.actions;
export default LanguageSlice.reducer;
