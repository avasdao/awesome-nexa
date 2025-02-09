/*
 * Import ALL databases.
 */
import appsDb from '../../../../static/db/listings/apps.json'
import buildersDb from '../../../../static/db/listings/builders.json'
import cexDb from '../../../../static/db/listings/cex.json'
import daosDb from '../../../../static/db/listings/daos.json'
import defiDb from '../../../../static/db/listings/defi.json'
import dexDb from '../../../../static/db/listings/dex.json'
import gamingDb from '../../../../static/db/listings/gaming.json'
import mediaDb from '../../../../static/db/listings/media.json'
import merchantsDb from '../../../../static/db/listings/merchants.json'
import miningDb from '../../../../static/db/listings/mining.json'
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
    case 'apps.json':
        return appsDb
    case 'builders.json':
        return buildersDb
    case 'cex.json':
        return cexDb
    case 'daos.json':
        return daosDb
    case 'defi.json':
        return defiDb
    case 'dex.json':
        return dexDb
    case 'gaming.json':
        return gamingDb
    case 'media.json':
        return mediaDb
    case 'merchants.json':
        return merchantsDb
    case 'mining.json':
        return miningDb
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
