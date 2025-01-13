/*
 * Import alias database.
 *
 * NOTE: New aliases are added to the TOP of the JSON file.
 */
import aliasDb from '../../static/db/alias.json'

export default defineEventHandler((event) => {
    /* Return all aliases. */
    return aliasDb
})
