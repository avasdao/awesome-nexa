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
    title: 'Cashdrive Miners Guild',
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    url: 'https://cashdriveminers.org/',
    imgUrl: 'https://i.ibb.co/Ryg4n2x/image.png',
    createdAt: 1675603538,
})

listings.push({
    id: 'ab267cd3-7773-4c4b-a7f1-7563af31c4c2',
    title: 'Homemade Crypto',
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    url: 'https://homemadecrypto.com/',
    imgUrl: 'https://i.ibb.co/wMztZvW/image.png',
    createdAt: 1675603396,
})

listings.push({
    id: 'ab267cd3-7773-4c4b-a7f1-7563af31c4c3',
    title: 'Real Satoshi Clan',
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    url: 'https://realsatoshiclan.com/',
    imgUrl: 'https://i.ibb.co/37Zqf6h/image.png',
    createdAt: 1675613396,
})

// TODO: Sort by date created.

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
