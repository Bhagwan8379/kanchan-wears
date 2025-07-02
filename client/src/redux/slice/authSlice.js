import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        admin: JSON.parse(localStorage.getItem("admin")),
        user: JSON.parse(localStorage.getItem("user"))
    },
    reducers: {
        logoutAdmin: (state, { payload }) => {
            localStorage.removeItem("admin")
            state.admin = null
        },
        logoutUser: (state, { payload }) => {
            localStorage.removeItem("user")
            state.user = null
        }
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.LoginUser.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(authApi.endpoints.LoginAdmin.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })
        .addMatcher(authApi.endpoints.LogoutAdmin.matchFulfilled, (state, { payload }) => {
            state.admin = null
        })
        .addMatcher(authApi.endpoints.LogoutUser.matchFulfilled, (state, { payload }) => {
            state.admin = null
        })


})

export const { logoutAdmin, logoutUser } = authSlice.actions
export default authSlice.reducer