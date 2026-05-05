// tests/unit/components/Hero.test.ts

import { describe, it, expect } from 'vitest'

/**
 * Hero.vue slideshow logic tests.
 */

const BANNERS = [
    'https://assets.awesomenexa.org/banner/nifty-art-v2.webp',
    'https://assets.awesomenexa.org/banner/pixel-war.webp',
    'https://assets.awesomenexa.org/banner/nebula-markets.webp',
    'https://i.ibb.co/BtD2RGR/01-wally-wallet.jpg',
    'https://i.ibb.co/CmgK4Sj/02-nexa-runes.jpg',
]

const MAX_SHOWCASE_BANNERS = 5

const LAUNCH_URLS = [
    'https://niftyart.cash/',
    'https://www.nverse.space/pixelwar',
    'https://nebula.markets/',
    'http://www.wallywallet.org/',
    'https://agnar.pages.dev/',
]

function getBannerUrl(id: number): string {
    if (id >= 0 && id < BANNERS.length) {
        return BANNERS[id]
    }
    return BANNERS[0]
}

function getLaunchUrl(id: number): string {
    if (id >= 0 && id < LAUNCH_URLS.length) {
        return LAUNCH_URLS[id]
    }
    return 'http://www.wallywallet.org/'
}

function nextBannerId(current: number): number {
    if (current >= MAX_SHOWCASE_BANNERS - 1) {
        return 0
    }
    return current + 1
}

describe('Hero slideshow logic', () => {

    describe('getBannerUrl', () => {
        it.each([0, 1, 2, 3, 4])(
            'returns correct banner for id %i',
            (id) => {
                expect(getBannerUrl(id)).toBe(BANNERS[id])
            },
        )

        it('defaults to first banner for invalid id', () => {
            expect(getBannerUrl(99)).toBe(BANNERS[0])
            expect(getBannerUrl(-1)).toBe(BANNERS[0])
        })
    })

    describe('getLaunchUrl', () => {
        it.each([0, 1, 2, 3, 4])(
            'returns correct URL for id %i',
            (id) => {
                expect(getLaunchUrl(id))
                    .toBe(LAUNCH_URLS[id])
            },
        )

        it('defaults to wallywallet for invalid id', () => {
            expect(getLaunchUrl(99))
                .toBe('http://www.wallywallet.org/')
        })
    })

    describe('nextBannerId', () => {
        it('increments normally', () => {
            expect(nextBannerId(0)).toBe(1)
            expect(nextBannerId(1)).toBe(2)
            expect(nextBannerId(2)).toBe(3)
            expect(nextBannerId(3)).toBe(4)
        })

        it('wraps around at max', () => {
            expect(nextBannerId(4)).toBe(0)
        })
    })
})
