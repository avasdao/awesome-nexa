/* Initialize listings. */
const listings: Object[] = []

// NOTE: Listings are listed in alphabetical order.
//       However, listings are sorted by date when reported by the API.

listings.push({
    id: 'a9b85906-6050-4aec-92a8-40b0430f7de3',
    title: 'Merchant Goes Here',
    summary: `Onboard a new business today!`,
    url: 'url',
    imgUrl: 'https://i.ibb.co/PZp9t88/image.png',
    createdAt: 1718410624,
})

listings.push({
    id: 'a9b85906-6050-4aec-92a8-40b0430f7de3',
    title: 'Merchant Goes Here',
    summary: `Onboard a new business today!`,
    url: 'url',
    imgUrl: 'https://i.ibb.co/PZp9t88/image.png',
    createdAt: 1718410624,
})

listings.push({
    id: 'a9b85906-6050-4aec-92a8-40b0430f7de3',
    title: 'Merchant Goes Here',
    summary: `Onboard a new business today!`,
    url: 'url',
    imgUrl: 'https://i.ibb.co/PZp9t88/image.png',
    createdAt: 1718410624,
})

// TODO: Sort by date created.

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
