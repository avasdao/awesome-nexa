export default defineEventHandler((event) => {
    event.context.auth = {
        profileid: 1337,
    }
})
