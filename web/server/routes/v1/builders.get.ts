/* Initialize listings. */
const listings: Object[] = []

// NOTE: Listings are listed in alphabetical order.
//       However, listings are sorted by date when reported by the API.

listings.push({
    id: 'afb8c9ad-c9f6-4bc0-87b2-28cad20d4dc6',
    title: '@0xShomari',
    summary: `Living the Crypto Life ~_^ We all have our passions. Mine is the freedom I feel with the Power of Code.`,
    url: 'https://twitter.com/0xShomari',
    imgUrl: 'https://pbs.twimg.com/profile_images/617458563/profile5_400x400.jpg',
    createdAt: 1718483664,
})

listings.push({
    id: '3b8524af-7ddf-4909-8d78-9fc77ebfbe05',
    title: '@vgRunner4v',
    summary: `Code machine by day, tech wolf by night. 🌙 My opinions as personal as my private keys: uniquely crafted and solely mine.`,
    url: 'https://twitter.com/vgRunner4v',
    imgUrl: 'https://pbs.twimg.com/profile_images/1631434118662635521/qrw6MhpF_400x400.jpg',
    createdAt: 1718483664,
})

listings.push({
    id: '0df8883a-d5cc-4fd4-89a3-f4514d7890aa',
    title: '@mainnet_pat',
    summary: `Creator of NexScript. From the migration of CashScript from Bitcoin Cash.`,
    url: 'https://twitter.com/mainnet_pat',
    imgUrl: 'https://pbs.twimg.com/profile_images/1657975431897796609/8e_cZWXz_400x400.jpg',
    createdAt: 1718483664,
})

// TODO: Sort by date created.

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
