/*
 * Import media database.
 */
import mediaDb from '../../../static/db/listings/media.json'

/* Initialize listings. */
const listings: Object[] = [...mediaDb]

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
