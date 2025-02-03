// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CreateSuperheroDto, SUPERHERO_TAG, SuperheroDto} from './types'
import {API_URL} from "../../constants.ts";

// Define a service using a base URL and expected endpoints
export const superheroApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    tagTypes: [SUPERHERO_TAG],
    endpoints: (builder) => ({
        getList: builder.query<SuperheroDto[], void>({
            query: () => '/superheroes',
            providesTags: [SUPERHERO_TAG],
        }),
        create: builder.mutation({
            query: (newSuperhero: CreateSuperheroDto) => ({
                url: '/superheroes',
                method: 'POST',
                body: newSuperhero,
            }),

            invalidatesTags: [SUPERHERO_TAG],
        })
    }),
})

export const {useGetListQuery, useCreateMutation} = superheroApi

