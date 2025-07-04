// import { configureStore } from "@reduxjs/toolkit";
// import { authApi } from "./api/authApi";
// import authSlice from "./slice/authSlice";


// const reduxStore = configureStore({
//     reducer: {
//         [authApi.reducerPath]: authApi.reducer,
//         auth: authSlice
//     },
//     middleware: def => [def(), authApi.middleware]
// })

// export default reduxStore




import { configureStore } from "@reduxjs/toolkit";
import { authApi } from './api/authApi'
import authSlice from './slice/authSlice'

const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice
    },
})

export default reduxStore