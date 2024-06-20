/* Initialize listings. */
const listings: Object[] = []

// NOTE: Listings are listed in alphabetical order.
//       However, listings are sorted by date when reported by the API.

listings.push({
    id: '369af2b7-d00a-44a8-9c8e-f28f5b0f4a04',
    title: 'Nexa Games',
    summary: `Community of real-money Gamers and the talented Creators who build & publish the games they love.`,
    url: 'https://nexa.games/',
    imgUrl: 'https://i.ibb.co/wBw9zGG/image.png',
    createdAt: 1718514208,
})

listings.push({
    id: '6b850ed7-fd46-4d7f-9381-20bd0b6ffa95',
    title: 'Wally Dice',
    summary: `TBD`,
    url: 'https://wallydice.com/',
    imgUrl: 'https://i.ibb.co/tbqKLKm/icon.png',
    createdAt: 1718514208,
})

listings.push({
    id: '30f6824f-6694-43b1-8af8-c3e41dfe2320',
    title: 'Your NEW! Game Here',
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
