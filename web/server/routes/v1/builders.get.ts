/*
 * Import builders database.
 */
import buildersDb from '../../../static/db/listings/builders.json'

/* Initialize listings. */
const listings: Object[] = [...buildersDb]

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
