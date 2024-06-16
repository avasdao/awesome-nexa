/* Initialize listings. */
const listings: Object[] = []

// NOTE: Listings are listed in alphabetical order.
//       However, listings are sorted by date when reported by the API.

listings.push({
    id: 'a9b85906-6050-4aec-92a8-40b0430f7de3',
    title: 'DeFi Project Here',
    summary: `Join the Nexa hackathon!`,
    url: 'https://forum.bitcoinunlimited.info/t/buip201-nexa-1st-hackathon/371/1',
    imgUrl: 'https://forum.bitcoinunlimited.info/uploads/default/original/1X/86e990234960ccc6c51d065df8d2524670a4d6d7.png',
    createdAt: 1718410624,
})

listings.push({
    id: 'a9b85906-6050-4aec-92a8-40b0430f7de3',
    title: 'DeFi Project Here',
    summary: `Join the Nexa hackathon!`,
    url: 'https://forum.bitcoinunlimited.info/t/buip201-nexa-1st-hackathon/371/1',
    imgUrl: 'https://forum.bitcoinunlimited.info/uploads/default/original/1X/86e990234960ccc6c51d065df8d2524670a4d6d7.png',
    createdAt: 1718410624,
})

listings.push({
    id: 'a9b85906-6050-4aec-92a8-40b0430f7de3',
    title: 'DeFi Project Here',
    summary: `Join the Nexa hackathon!`,
    url: 'https://forum.bitcoinunlimited.info/t/buip201-nexa-1st-hackathon/371/1',
    imgUrl: 'https://forum.bitcoinunlimited.info/uploads/default/original/1X/86e990234960ccc6c51d065df8d2524670a4d6d7.png',
    createdAt: 1718410624,
})

// TODO: Sort by date created.

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
