export default defineEventHandler((event) => {
    /* Set price. */
    // FIXME FOR DEV PURPOSES ONLY
    const price = '0.000013370000'

    /* Send response. */
    event.node.res.end(price)
})
