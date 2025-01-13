/*
 * Import ALL databases.
 */
// import listingsDb from '../../../static/db/listings/listings.json'
import buildersDb from '../../../../static/db/listings/builders.json'
import mediaDb from '../../../../static/db/listings/media.json'
import nftsDb from '../../../../static/db/listings/nfts.json'
import referencesDb from '../../../../static/db/listings/references.json'
import toolingDb from '../../../../static/db/listings/tooling.json'
import walletsDb from '../../../../static/db/listings/wallets.json'

/* Initialize listings. */
// const listings: Object[] = [...listingsDb]

export default defineEventHandler(async _event => {
    /* Set category. */
    const category = _event?.context?.params?.category
    // console.log('CATEGORY', category)

    /* Validate category. */
    if (!category) {
        return {
            error: 'You MUST provide a category. (see the API Docs -- https://awesomenexa.org/v1)'
        }
    }

    switch(category) {
    case 'builders':
        return buildersDb
    case 'media':
        return mediaDb
    case 'nfts':
        return nftsDb
    case 'references':
        return referencesDb
    case 'tooling':
        return toolingDb
    case 'wallets':
        return walletsDb
    default:
        return []
    }
})
