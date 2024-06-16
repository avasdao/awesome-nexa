/* Initialize listings. */
const listings: Object[] = []

// NOTE: Listings are listed in alphabetical order.
//       However, listings are sorted by date when reported by the API.

listings.push({
    id: '8f3e8d75-d40f-439f-90b4-d74b7131319b',
    title: 'Nexa Specifications',
    summary: `A detailed document covering the full Nexa protocol and consensus specifications.`,
    url: 'https://spec.nexa.org/',
    imgUrl: 'https://i.ibb.co/VjGyXh9/clipboard.png',
    createdAt: 1718570767,
})

listings.push({
    id: '017d2aec-c721-4bf5-8fbe-5c1f91c3e7e5',
    title: 'reference title',
    summary: `summary`,
    url: 'url',
    imgUrl: 'https://assets.super.so/ddffb637-6356-4624-9f22-bb4755755d09/images/e2b226d0-e5de-48f9-a521-35af4c4f2e53/nexa-logo-mark.svg',
    createdAt: 1718570767,
})

listings.push({
    id: '34493d14-48a5-4463-bb6a-e14be9d5bd6e',
    title: 'reference title',
    summary: `summary`,
    url: 'url',
    imgUrl: 'https://assets.super.so/ddffb637-6356-4624-9f22-bb4755755d09/images/e2b226d0-e5de-48f9-a521-35af4c4f2e53/nexa-logo-mark.svg',
    createdAt: 1718570767,
})

// TODO: Sort by date created.

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
