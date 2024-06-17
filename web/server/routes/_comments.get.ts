/*
 * Import comments database.
 *
 * NOTE: New comments are added to the TOP of the JSON file.
 */
import commentsDb from '../../static/db/comments.json'

export default defineEventHandler((event) => {
    /* Return all comments. */
    return commentsDb
})
