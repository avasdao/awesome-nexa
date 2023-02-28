export default defineEventHandler(async (event) => {
    /* Set (request) body. */
    const body = await readBody(event)
    console.log('BODY (_login_/auto', body)

    return {
        success: true,
    }
})
