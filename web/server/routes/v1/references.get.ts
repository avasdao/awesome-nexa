/*
 * Import references database.
 */
import referencesDb from '../../../static/db/listings/references.json'

/* Initialize listings. */
const listings: Object[] = [...referencesDb]

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
