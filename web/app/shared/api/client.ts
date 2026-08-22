import { $fetch } from "ofetch";

const config = useRuntimeConfig();

export const api = $fetch.create({
    baseURL: config.public.apiUrl,
    headers: {
        Accept: "application/json",
    },
});