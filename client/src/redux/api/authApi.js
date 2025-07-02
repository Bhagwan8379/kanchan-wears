import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/auth`, credentials: "include" }),
    tagTypes: ["auth"],
    endpoints: (builder) => {
        return {
            LoginUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/login-user",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("user")
                    return data.result
                },
                invalidatesTags: ["auth"]
            }),

            LoginAdmin: builder.mutation({
                query: userData => {
                    return {
                        url: "/login-admin",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("admin")
                    return data.result
                },
                invalidatesTags: ["auth"]
            }),

            RegisterUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/register-user",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["auth"]
            }),

            LogoutUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout-user",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("user")
                    return data.result
                },
                invalidatesTags: ["auth"]
            }),
            LogoutAdmin: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout-admin",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("admin")
                    return data.result
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
} = authApi
