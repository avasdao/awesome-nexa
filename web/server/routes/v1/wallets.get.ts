/*******************************************************************************
 *
 * WALLETS
 *
 * https://awesomenexa.org/wallets
 */

/* Initialize wallets. */
const wallets: Object[] = []

// NOTE: Wallets are listed in alphabetical order.
//       However, wallets are sorted by date when reported by the API.

wallets.push({
    id: '70657c74-fc6b-4698-98f5-23c5ec3d9286',
    title: 'Core Wallet',
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    url: 'https://cashdriveminers.org/',
    imgUrl: 'https://i.ibb.co/Ryg4n2x/image.png',
    createdAt: 1675603538,
})

wallets.push({
    id: 'ab267cd3-7773-4c4b-a7f1-7563af31c4c2',
    title: 'Web Wallet',
    summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    url: 'https://homemadecrypto.com/',
    imgUrl: 'https://i.ibb.co/wMztZvW/image.png',
    createdAt: 1675603396,
})

// TODO: Sort by date created.

export default defineEventHandler((event) => {
    /* Return all wallets. */
    return wallets
})
