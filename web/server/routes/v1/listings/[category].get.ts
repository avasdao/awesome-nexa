/*
 * Import ALL databases.
 */
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
    case 'builders.json':
        return buildersDb
    case 'media.json':
        return mediaDb
    case 'nfts.json':
        return nftsDb
    case 'references.json':
        return referencesDb
    case 'tooling.json':
        return toolingDb
    case 'wallets.json':
        return walletsDb
    default:
        return []
    }
})
