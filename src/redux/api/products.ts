import { Product } from "../../types/auth";
import { api } from "./index";

const productsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<Product[], undefined>({
            query: () => ({
                url: "/products",
            }),
            providesTags: ["PRODUCTS"]
        })
    })
})

export const {useGetProductsQuery} = productsApi;