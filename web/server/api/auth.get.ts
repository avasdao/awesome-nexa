export default defineEventHandler(async (event) => {
    /* Set (request) query. */
    const query = getQuery(event)
    console.log('QUERY', query)

    return {
        success: true,
    }
})
