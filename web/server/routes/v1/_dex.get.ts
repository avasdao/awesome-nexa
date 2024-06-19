/* Initialize listings. */
const listings: Object[] = []

// NOTE: Listings are listed in alphabetical order.
//       However, listings are sorted by date when reported by the API.

listings.push({
    id: '91b41306-dc41-4b49-86e3-2e818078e1fd',
    title: 'WiserSwap',
    summary: `Automated Market Maker (AMM) built to support over 100K+ asset TPS.`,
    url: 'https://wiserswap.com',
    imgUrl: 'https://i.ibb.co/mBMFHFT/icon.png',
    createdAt: 1718393667,
})

listings.push({
    id: '30f6824f-6694-43b1-8af8-c3e41dfe2320',
    title: 'Your NEW! DEX Here',
    summary: `Dream it. Build it. Profit! Join the Nexa hackathon to discover your hidden Builder talents.`,
    url: 'https://forum.bitcoinunlimited.info/t/buip201-nexa-1st-hackathon/371/1',
    imgUrl: 'https://forum.bitcoinunlimited.info/uploads/default/original/1X/86e990234960ccc6c51d065df8d2524670a4d6d7.png',
    createdAt: 1718514208,
})

listings.push({
    id: '30f6824f-6694-43b1-8af8-c3e41dfe2320',
    title: 'Your NEW! DEX Here',
    summary: `Dream it. Build it. Profit! Join the Nexa hackathon to discover your hidden Builder talents.`,
    url: 'https://forum.bitcoinunlimited.info/t/buip201-nexa-1st-hackathon/371/1',
    imgUrl: 'https://forum.bitcoinunlimited.info/uploads/default/original/1X/86e990234960ccc6c51d065df8d2524670a4d6d7.png',
    createdAt: 1718514208,
})

// TODO: Sort by date created.

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
