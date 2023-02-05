/*******************************************************************************
 *
 * MINING
 *
 * https://awesomenexa.org/mining
 */

/* Initialize listings. */
const listings = []

// NOTE: Listings are listed in alphabetical order.
//       However, listings are sorted by date when reported by the API.

listings.push({
    id: '70657c74-fc6b-4698-98f5-23c5ec3d9286',
    name: 'Cashdrive Miners Guild',
    url: 'https://cashdriveminers.org/',
    createdAt: 1675603538,
})

listings.push({
    id: 'ab267cd3-7773-4c4b-a7f1-7563af31c4c2',
    name: 'Homemade Crypto',
    url: 'https://homemadecrypto.com/',
    createdAt: 1675603396,
})

// TODO: Sort by date created.

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
