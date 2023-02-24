/* Define Ticker */
interface APIResponse {
    status: Object,
    data: CMCData,
}

/* Define CoinMarketCap Data */
interface CMCData {
    NEXA: Object,
}

const CMC_API_KEY: string | undefined = process.env.CMC_API_KEY

/* Set endpoint. */
const CMC_API_ENDPOINT: string = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'

/* Set (request) target. */
const target: string = CMC_API_ENDPOINT + `?symbol=NEXA` // ID = 23380

/* Initialize ticker. */
let ticker: CMCData | unknown

const headers: HeadersInit = {
    'accept': 'json',
    'Content-type': 'application/json;charset=utf-8',
    'X-CMC_PRO_API_KEY': CMC_API_KEY || '',
}

/**
 * Manage the latest ticker information for NEXA.
 *
 * Will query CoinMarketCap API to retrieve the latest
 * data every 300 seconds (5 minutes).
 */
;(async () => {
    try {
        /* Request data. */
        const response: APIResponse = await $fetch(target, {
            headers,
        })
        console.log('API RESPONSE', response)

        /* Set ticker to the response. */
        ticker = response?.data?.NEXA
    } catch (err) {
        // FIXME Handle errors. (setup Bugsnag)
        console.error(err)
    }

})()

export default defineEventHandler((event) => {
    /* Set error message. */
    const errorMsg = {
        error: `Oops! It looks like we don't have any ticker information. Administrators have been notified of the situation.`
    }

    /* Return ticker. */
    return ticker || errorMsg
})
