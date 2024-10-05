import { api } from "./index";
import { PayloadToken, User } from "../../types/auth";

const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        signIn: build.mutation<PayloadToken, User>({
            query: (body) => ({
                url: "/auth/login",
                method: "POST",
                body
            })
        })
    })
})

export const {useSignInMutation} = authApi;