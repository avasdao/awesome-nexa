/*******************************************************************************
 *
 * MINING
 *
 * https://awesomenexa.org/mining
 */

/* Initialize listings. */
const listings: Object[] = []

// NOTE: Listings are listed in alphabetical order.
//       However, listings are sorted by date when reported by the API.

listings.push({
    id: 'e90d84cc-0b6d-4c02-89e4-02244566cd1b',
    title: 'BzMiner',
    summary: `Fast Windows/Linux crypto miner with remote management.`,
    url: 'https://www.bzminer.com/',
    imgUrl: 'https://i.ibb.co/pRS5L2T/image.png',
    createdAt: 1718395848,
})

listings.push({
    id: '08fbeed1-c74d-4322-9bd4-6e0045d847a3',
    title: 'f2pool',
    summary: `f2pool is the world’s leading mining pool, serving miners in more than 100 countries.`,
    url: 'https://f2pool.zendesk.com/hc/en-us/articles/30086739823001-How-to-mine-Nexa',
    imgUrl: 'https://i.ibb.co/jTCDkbK/image.png',
    createdAt: 1718395848,
})

listings.push({
    id: 'ba962025-c9b4-40e5-a22e-89c6c3e5f4b3',
    title: 'WoolyPooly',
    summary: `WoolyPooly is one of the most profitable pools with our focus on minimal commission fees for PPLNS & SOLO reward systems.`,
    url: 'https://woolypooly.com/',
    imgUrl: 'https://i.ibb.co/TYXSc20/image.png',
    createdAt: 1718395848,
})

// TODO: Sort by date created.

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
