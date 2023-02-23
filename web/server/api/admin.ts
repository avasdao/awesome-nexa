export default defineEventHandler((event) => {
    /* Set authorization. */
    const auth = event.context.auth

    return {
        auth,
    }
})
