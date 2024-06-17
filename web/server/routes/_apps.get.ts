/*
 * Import apps database.
 */
import appsDb from '../../static/db/apps.json'

/* Initialize listings. */
const listings: Object[] = [...appsDb]

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
