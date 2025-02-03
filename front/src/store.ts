import {configureStore} from '@reduxjs/toolkit'
import {superheroApi} from "./feature/superhero/superhero.ts";

export const store = configureStore({
    reducer: {
        [superheroApi.reducerPath]: superheroApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(superheroApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch