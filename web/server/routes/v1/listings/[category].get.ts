/* Import modules. */
import PouchDB from 'pouchdb'

/* Initialize databases. */
const listingsDb = new PouchDB(`https://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@db.awesomenexa.org/listings`)

/*
 * Import listings database.
 */
// import listingsDb from '../../../static/db/listings/listings.json'

/* Initialize listings. */
// const listings: Object[] = [...listingsDb]

export default defineEventHandler(async _event => {
    /* Initialzie locals. */
    let listings
    let sanitized
    let sorted

    /* Set category. */
    const category = _event?.context?.params?.category
    // console.log('CATEGORY', category)

    /* Validate category. */
    if (!category) {
        return {
            error: 'You MUST provide a category. (see the API Docs -- https://awesomenexa.org/v1)'
        }
    }

    /* Request listings. */
    listings = await listingsDb
        .query('api/byCategory', {
            key: category,
            include_docs: true,
        })
        .catch(err => console.error(err))
    // console.log('LISTINGS', listings)

    /* Sanitize listings. */
    sanitized = listings.rows.map(_listing => {
        /* Set document. */
        const doc = _listing.doc

        /* Remove metadata. */
        delete doc._id
        delete doc._rev

        /* Return document. */
        return doc
    })
    // console.log('SANITIZED', sanitized)

    sorted = sanitized.sort((a, b) => {
        return b.updatedAt - a.updatedAt
    })

    /* Return listings. */
    return sorted
})
