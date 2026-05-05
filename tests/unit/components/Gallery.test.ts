// tests/unit/components/Gallery.test.ts

import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * Gallery.vue logic extracted for testability.
 *
 * We test the pure logic (URL building, listing slicing,
 * category fetch URL resolution) without mounting the
 * full Vue component.
 */

const API_ENDPOINT = 'https://awesomenexa.org/v1'
const MAXIMUM_LISTINGS_PER_CATEGORY = 6

const VALID_CATEGORIES = [
    'apps', 'builders', 'cex', 'daos', 'defi', 'dex',
    'gaming', 'media', 'merchants', 'mining', 'nfts',
    'references', 'tooling', 'wallets',
]

function buildFetchUrl(cat: string): string | null {
    if (VALID_CATEGORIES.includes(cat)) {
        return `${API_ENDPOINT}/listing?category=${cat}`
    }
    return null
}

function getUrl(listing: {
    slug?: string; category?: string; url?: string
}): string {
    if (listing.slug) {
        return listing.category + '/' + listing.slug
    } else {
        return listing.url || ''
    }
}

function getTarget(listing: { slug?: string }): string {
    if (listing.slug) {
        return ''
    }
    return '_blank'
}

function sliceListings(
    data: unknown[] | undefined,
    showAll: boolean,
): unknown[] {
    if (!data) return []
    if (showAll) return data
    return data.slice(0, MAXIMUM_LISTINGS_PER_CATEGORY)
}

describe('Gallery logic', () => {

    describe('buildFetchUrl', () => {
        it.each(VALID_CATEGORIES)(
            'builds correct URL for "%s"',
            (cat) => {
                expect(buildFetchUrl(cat)).toBe(
                    `${API_ENDPOINT}/listing?category=${cat}`
                )
            },
        )

        it('returns null for unknown category', () => {
            expect(buildFetchUrl('unknown')).toBeNull()
        })
    })

    describe('getUrl', () => {
        it('returns slug-based path when slug exists', () => {
            expect(getUrl({
                slug: 'my-app',
                category: 'apps',
                url: 'https://ext.com',
            })).toBe('apps/my-app')
        })

        it('returns external URL when no slug', () => {
            expect(getUrl({
                url: 'https://external.example.com',
            })).toBe('https://external.example.com')
        })

        it('returns empty string when no slug and no url',
            () => {
                expect(getUrl({})).toBe('')
            }
        )
    })

    describe('getTarget', () => {
        it('returns empty string for internal listings', () => {
            expect(getTarget({ slug: 'my-app' })).toBe('')
        })

        it('returns _blank for external listings', () => {
            expect(getTarget({})).toBe('_blank')
        })
    })

    describe('sliceListings', () => {
        const items = Array.from(
            { length: 10 }, (_, i) => ({ id: i })
        )

        it('returns empty array for undefined data', () => {
            expect(sliceListings(undefined, false)).toEqual([])
        })

        it('limits to 6 by default', () => {
            expect(sliceListings(items, false)).toHaveLength(6)
        })

        it('returns all when showAll is true', () => {
            expect(sliceListings(items, true)).toHaveLength(10)
        })

        it('returns all when fewer than max', () => {
            const small = [{ id: 1 }, { id: 2 }]
            expect(sliceListings(small, false))
                .toHaveLength(2)
        })
    })
})
