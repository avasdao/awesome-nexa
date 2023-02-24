export default defineEventHandler((event) => {
    event.context.auth = {
        // FIXME FOR DEV PURPOSES ONLY
        profileid: 1338,
    }
})
