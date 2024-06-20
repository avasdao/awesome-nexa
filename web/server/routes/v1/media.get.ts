/*
 * Import media database.
 */
import mediaDb from '../../../static/db/media.json'

/* Initialize listings. */
const listings: Object[] = [...mediaDb]

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
