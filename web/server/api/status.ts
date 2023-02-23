export default defineEventHandler((event) => {
    const dbStatus = 'ok'
    const tickerStatus = 'ok'
    const nexidStatus = 'ok'

    return {
        db: dbStatus,
        ticker: tickerStatus,
        nexid: nexidStatus,
    }
})
