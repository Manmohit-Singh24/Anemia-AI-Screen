import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "AuthData",
    initialState: {
        username: undefined,
        role: undefined,
        isLoggedIn: false,
        theme: "dark",
    },
    reducers: {
        setAuthData: (state, action) => {
            let data = action.payload;
            for (let key in data) state[key] = data[key];
        },
        toogleTheme : (state , action) => {
            state.theme = state.theme === "light" ? "dark" : "light"
        }
    },
});

export const { toogleTheme, setAuthData } = AuthSlice.actions;
export default AuthSlice.reducer;

export const store = configureStore({
    reducer: {
        AuthData: AuthSlice.reducer,
    },
});
