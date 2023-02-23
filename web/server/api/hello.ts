export default defineEventHandler((event) => {
    const query = getQuery(event)

    return {
        hi: 'there!',
        query,
    }
})
