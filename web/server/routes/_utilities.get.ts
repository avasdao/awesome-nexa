/* Initialize listings. */
const listings: Object[] = []

// NOTE: Listings are listed in alphabetical order.
//       However, listings are sorted by date when reported by the API.

listings.push({
    id: '6ceb410e-7868-4802-aef5-d9e26f5fae05',
    title: 'Nexa Explorer',
    summary: `Search, track and analyze transactions, blocks, and other data within the Nexa blockchain.`,
    url: 'https://explorer.nexa.org/',
    imgUrl: 'https://assets.super.so/ddffb637-6356-4624-9f22-bb4755755d09/images/e2b226d0-e5de-48f9-a521-35af4c4f2e53/nexa-logo-mark.svg',
    createdAt: 1718410624,
})

listings.push({
    id: 'b0eafbfb-ca18-42f4-81b7-0dbeba72fca9',
    title: 'NexaShell',
    summary: `Reliably delivering the fastest and most affordable cloud data solutions to Nexicans since 2022.`,
    url: 'https://nexa.sh',
    imgUrl: 'https://i.ibb.co/Zh96C5H/icon.png',
    createdAt: 1718410624,
})

listings.push({
    id: '94e9a48f-7b80-4fd3-b833-19b129ca9c99',
    title: 'Script Debugger',
    summary: `Test and debug smart contracts written for the Nexa blockchain.`,
    url: 'https://debug.nexa.org/',
    imgUrl: 'https://i.ibb.co/dk8RdxF/script.png',
    createdAt: 1718410624,
})

// TODO: Sort by date created.

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
