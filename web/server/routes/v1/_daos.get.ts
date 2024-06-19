/* Initialize listings. */
const listings: Object[] = []

// NOTE: Listings are listed in alphabetical order.
//       However, listings are sorted by date when reported by the API.

listings.push({
    id: 'a9b85906-6050-4aec-92a8-40b0430f7de3',
    title: 'dao title',
    summary: `summary`,
    url: 'url',
    imgUrl: 'https://assets.super.so/ddffb637-6356-4624-9f22-bb4755755d09/images/e2b226d0-e5de-48f9-a521-35af4c4f2e53/nexa-logo-mark.svg',
    createdAt: 1718410624,
})

listings.push({
    id: 'a9b85906-6050-4aec-92a8-40b0430f7de3',
    title: 'dao title',
    summary: `summary`,
    url: 'url',
    imgUrl: 'https://assets.super.so/ddffb637-6356-4624-9f22-bb4755755d09/images/e2b226d0-e5de-48f9-a521-35af4c4f2e53/nexa-logo-mark.svg',
    createdAt: 1718410624,
})

listings.push({
    id: 'a9b85906-6050-4aec-92a8-40b0430f7de3',
    title: 'dao title',
    summary: `summary`,
    url: 'url',
    imgUrl: 'https://assets.super.so/ddffb637-6356-4624-9f22-bb4755755d09/images/e2b226d0-e5de-48f9-a521-35af4c4f2e53/nexa-logo-mark.svg',
    createdAt: 1718410624,
})

// TODO: Sort by date created.

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
