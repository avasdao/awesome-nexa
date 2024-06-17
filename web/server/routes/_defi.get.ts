/*
 * Import DeFi database.
 */
import defiDb from '../../static/db/defi.json'

/* Initialize listings. */
const listings: Object[] = [...defiDb]

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
