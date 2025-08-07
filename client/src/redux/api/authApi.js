import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/auth`, credentials: "include" }),
    tagTypes: ["auth"],
    endpoints: (builder) => {
        return {
            LoginUser: builder.mutation({
                query: (userData) => ({
                    url: "/login-user",
                    method: "POST",
                    body: userData
                }),
                transformResponse: (data) => {
                    if (data) {
                        localStorage.setItem("user", JSON.stringify(data.data));
                    }
                    return data.data;
                },
                invalidatesTags: ["auth"]
            }),

            LoginAdmin: builder.mutation({
                query: (userData) => ({
                    url: "/login-admin",
                    method: "POST",
                    body: userData
                }),
                transformResponse: (data) => {
                    if (data) {
                        localStorage.setItem("admin", JSON.stringify(data.data));
                    }
                    return data.data;
                },
                invalidatesTags: ["auth"]
            }),

            RegisterUser: builder.mutation({
                query: (userData) => ({
                    url: "/register-user",
                    method: "POST",
                    body: userData
                }),
                invalidatesTags: ["auth"]
            }),

            LogoutUser: builder.mutation({
                query: () => ({
                    url: "/logout-user",
                    method: "POST"
                }),
                transformResponse: (data) => {
                    localStorage.removeItem("user");
                    return data.data;
                },
                invalidatesTags: ["auth"]
            }),

            LogoutAdmin: builder.mutation({
                query: () => ({
                    url: "/logout-admin",
                    method: "POST"
                }),
                transformResponse: (data) => {
                    localStorage.removeItem("admin");
                    return data.data;
                },
                invalidatesTags: ["auth"]
            }),
        }
    }
})

export const {
    useRegisterUserMutation,
    useLoginAdminMutation,
    useLoginUserMutation,
    useLogoutAdminMutation,
    useLogoutUserMutation
} = authApi;
