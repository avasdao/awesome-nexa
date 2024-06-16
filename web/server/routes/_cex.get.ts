/* Initialize listings. */
const listings: Object[] = []

// NOTE: Listings are listed in alphabetical order.
//       However, listings are sorted by date when reported by the API.

listings.push({
    id: '71d7adcc-8872-461f-99ad-bc93afedc9f7',
    title: 'MEXC Global',
    summary: `Reputable exchange offering high performance and mega transaction matching technology.`,
    url: 'https://www.mexc.com/exchange/NEXA_USDT',
    imgUrl: 'https://i.ibb.co/YQrQgWC/image.png',
    createdAt: 1718393667,
})

listings.push({
    id: 'ec2c5673-7369-49fc-87d6-d426c0636077',
    title: 'CoinEx',
    summary: `A global crypto exchange committed to making crypto trading easier.`,
    url: 'https://www.coinex.com/en/exchange/NEXA-USDT',
    imgUrl: 'https://i.ibb.co/bJj3CKt/image.png',
    createdAt: 1718393667,
})

listings.push({
    id: 'a5935c83-f728-4244-b6ed-d22b1f1b43ee',
    title: 'BingX',
    summary: `Founded in 2018, BingX is a leading crypto exchange, serving over 10 million users worldwide.`,
    url: 'https://bingx.com/en/spot/NEXAUSDT/',
    imgUrl: 'https://i.ibb.co/LghzxXt/image.png',
    createdAt: 1718393667,
})

// TODO: Sort by date created.

export default defineEventHandler((event) => {
    /* Return all listings. */
    return listings
})
