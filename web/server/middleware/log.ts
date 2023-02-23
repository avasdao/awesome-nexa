export default defineEventHandler((event) => {
    /* Set headers. */
    const headers = event.node.req.headers
    console.log('HEADERS', headers)

    /* Build log details. */
    const logDetails = {
        i18n: headers['accept-language'],
        client: headers['user-agent'],
        url: event.node.req.url,
    }

    console.info('LOG (api):', logDetails)
})
