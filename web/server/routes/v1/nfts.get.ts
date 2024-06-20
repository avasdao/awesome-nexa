/*
 * Import NFTs database.
 */
import nftsDb from '../../../static/db/listings/nfts.json'

/* Initialize listings. */
const listings: Object[] = [...nftsDb]

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
