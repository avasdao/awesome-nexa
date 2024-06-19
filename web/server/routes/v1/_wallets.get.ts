/*
 * Import wallets database.
 */
import walletsDb from '../../../static/db/wallets.json'

/* Initialize listings. */
const listings: Object[] = [...walletsDb]

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
