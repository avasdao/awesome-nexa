export default defineEventHandler((event) => {
    /* Set (invalid) path URL. */
    const path = event.context.params.invalid

    return {
        error: `Oops! [ ${path} ] is invalid. You MUST provide a valid endpoint. Please visit https://awesomenexa.org/api for more help.`
    }
})
