/* Initialize listings. */
const listings: Object[] = []

// NOTE: Listings are listed in alphabetical order.
//       However, listings are sorted by date when reported by the API.

listings.push({
    id: 'a9b85906-6050-4aec-92a8-40b0430f7de3',
    title: 'NiftyArt',
    summary: `Buy, sell, and create NFT tokens in this open marketplace.`,
    url: 'https://niftyart.cash/',
    imgUrl: 'https://i.ibb.co/7yry6FY/image.png',
    createdAt: 1718410624,
})

listings.push({
    id: '188db723-bae4-4249-879d-28d81204eaec',
    title: 'Causes Cash',
    summary: `An UNSTOPPABLE peer-to-peer crowdfunding platform powered by blockchain technology.`,
    url: 'https://causes.cash',
    imgUrl: 'https://i.ibb.co/dWPz0Ph/logo.png',
    createdAt: 1718410624,
})

listings.push({
    id: '8752fefe-10a4-4aeb-a0b8-4364e25c026e',
    title: 'Hush Your Money',
    summary: `Spend Privately. Fearlessly!`,
    url: 'https://hushyourmoney.com',
    imgUrl: 'https://i.ibb.co/8zMZ61k/icon.png',
    createdAt: 1718410624,
})

// TODO: Sort by date created.

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
