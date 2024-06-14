/* Initialize listings. */
const listings: Object[] = []

// NOTE: Listings are listed in alphabetical order.
//       However, listings are sorted by date when reported by the API.

listings.push({
    id: '37d91563-be0b-45ee-b8af-083ffd57e26a',
    title: 'Otoplo',
    summary: `The Otoplo wallet is the gateway to all the technology we are bringing to Nexa.`,
    url: 'https://otoplo.com/wallets',
    imgUrl: 'https://i.ibb.co/19V67pX/image.png',
    createdAt: 1718408183,
})

listings.push({
    id: '9fafa933-304e-4f24-b211-84f5f693a1f0',
    title: 'Core Node',
    summary: `f2pool is the world’s leading mining pool, serving miners in more than 100 countries.`,
    url: 'https://nexa.org/node',
    imgUrl: 'https://assets.super.so/ddffb637-6356-4624-9f22-bb4755755d09/images/e2b226d0-e5de-48f9-a521-35af4c4f2e53/nexa-logo-mark.svg',
    createdAt: 1718408183,
})

listings.push({
    id: 'dbf1d76f-8e6f-46f0-bb50-643de34a80bd',
    title: 'Wally Wallet',
    summary: `Wally Wallet is a cryptocurrency wallet focused on the Nexa blockchain.`,
    url: 'http://www.wallywallet.org/',
    imgUrl: 'https://i.ibb.co/vzWndTY/image.png',
    createdAt: 1718408183,
})

// TODO: Sort by date created.

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
