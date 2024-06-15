/* Initialize listings. */
const listings: Object[] = []

// NOTE: Listings are listed in alphabetical order.
//       However, listings are sorted by date when reported by the API.

listings.push({
    id: 'd579ac8c-816b-486c-bf40-7c5162744f1f',
    title: 'NEXA.js',
    summary: `A premium Builder Experience (BX) for creating decentralized applications (dApps).`,
    url: 'https://nexajs.org',
    imgUrl: 'https://i.ibb.co/59mHSRb/logo.png',
    createdAt: 1718408183,
})

listings.push({
    id: '1b4fe75a-08c2-4174-be92-25fb126818b4',
    title: 'NexScript',
    summary: `A high-level programming language for smart contracts on Nexa.`,
    url: 'https://nexscript.org/',
    imgUrl: 'https://i.ibb.co/W2T2TZs/nexscript.png',
    createdAt: 1718408183,
})

listings.push({
    id: 'd1f5cab6-2bc3-4513-a58b-46384552fd0e',
    title: 'Tokenize',
    summary: `A simple and cost-effective toolkit to launch your own $TOKEN project.`,
    url: 'https://release.otoplo.com/tokenize/1.0.0/',
    imgUrl: 'https://i.ibb.co/Dbr8myS/tokenize.png',
    createdAt: 1718408183,
})

// TODO: Sort by date created.

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
