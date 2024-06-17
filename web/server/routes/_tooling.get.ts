/*
 * Import tooling database.
 */
import toolingDb from '../../static/db/tooling.json'

/* Initialize listings. */
const listings: Object[] = [...toolingDb]

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
