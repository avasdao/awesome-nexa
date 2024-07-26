/*
 * Import alias database.
 *
 * NOTE: New aliases are added to the TOP of the JSON file.
 */
// import aliasDb from '../../static/db/alias.json'
const aliasDb = [
    'admin',
    'root',
]

export default defineEventHandler((event) => {
    /* Return all aliases. */
    return aliasDb
})
