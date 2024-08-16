// plugins/auth0.ts
import { defineNuxtPlugin } from '#app'
import { createAuth0 } from '@auth0/auth0-vue'

export default defineNuxtPlugin(nuxtApp => {
    const runtimeConfig = useRuntimeConfig()

    if (!runtimeConfig.public.auth0Domain || !runtimeConfig.public.auth0ClientId) {
        throw new Error('Auth0 configuration is missing.')
    }

    const redirectUri = process.server
        ? `http://${nuxtApp.ssrContext?.req?.headers?.host}`
        : window.location.origin

    nuxtApp.vueApp.use(createAuth0({
        domain: runtimeConfig.public.auth0Domain,
        clientId: runtimeConfig.public.auth0ClientId,
        authorizationParams: {
            redirect_uri: redirectUri
        }
    }))
})
