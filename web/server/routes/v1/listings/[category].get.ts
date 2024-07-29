/* Import modules. */
import PouchDB from 'pouchdb'

/* Initialize databases. */
const listingsDb = new PouchDB(`https://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@db.awesomenexa.org/listings`)

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

    /* Validate listings. */
    if (!listings?.rows) {
        return []
    }

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

    /* Validate sanitized. */
    if (!sanitized) {
        return []
    }

    /* Sort sanitized. */
    sorted = sanitized.sort((a, b) => {
        return b.updatedAt - a.updatedAt
    })

    /* Return (sorted) listings. */
    return sorted
})
