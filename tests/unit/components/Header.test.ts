// tests/unit/components/Header.test.ts

import { describe, it, expect } from 'vitest'
import { useFormats } from '~/composables/useFormats'

const { formatNumber } = useFormats()

/**
 * Header.vue display logic tests.
 *
 * The Header component derives displayTicker, displayPctChg,
 * and displayVol from the system store's ticker data.
 * We test those computed derivations here as pure functions.
 */

function displayTicker(ticker: unknown): string {
    if (!ticker) return '$0.00'
    const quote = (ticker as any).quote
    if (!quote) return '$0.00'
    const price = quote?.USD?.price
    if (!price) return '$0.00'
    return formatNumber(price * 1000000, '$0,0.00')
}

function displayPctChg(ticker: unknown): string {
    if (!ticker) return '0.0%'
    const quote = (ticker as any).quote
    if (!quote) return '0.0%'
    const pctChg24h = quote?.USD?.pctChg24h
    if (!pctChg24h) return '0.0%'
    return formatNumber(pctChg24h / 100, '0.00%')
}

function displayVol(ticker: unknown): string {
    if (!ticker) return '0'
    const quote = (ticker as any).quote
    if (!quote) return '0'
    const vol = quote?.USD?.vol24
    if (!vol) return '0'
    return formatNumber(vol, '0[.]0a')
}

describe('Header display logic', () => {

    describe('displayTicker', () => {
        it('returns $0.00 for null ticker', () => {
            expect(displayTicker(null)).toBe('$0.00')
        })

        it('returns $0.00 when no quote', () => {
            expect(displayTicker({})).toBe('$0.00')
        })

        it('returns $0.00 when no USD price', () => {
            expect(displayTicker({ quote: {} }))
                .toBe('$0.00')
        })

        it('formats mNEXA/USD correctly', () => {
            const ticker = {
                quote: { USD: { price: 0.00042 } },
            }
            // 0.00042 * 1e6 = 420
            expect(displayTicker(ticker)).toBe('$420.00')
        })

        it('formats sub-penny price', () => {
            const ticker = {
                quote: { USD: { price: 0.000001 } },
            }
            // 0.000001 * 1e6 = 1
            expect(displayTicker(ticker)).toBe('$1.00')
        })
    })

    describe('displayPctChg', () => {
        it('returns 0.0% for null ticker', () => {
            expect(displayPctChg(null)).toBe('0.0%')
        })

        it('formats positive change', () => {
            const ticker = {
                quote: { USD: { pctChg24h: 5.25 } },
            }
            // 5.25 / 100 = 0.0525 → "5.25%"
            expect(displayPctChg(ticker)).toBe('5.25%')
        })

        it('formats negative change', () => {
            const ticker = {
                quote: { USD: { pctChg24h: -3.1 } },
            }
            expect(displayPctChg(ticker)).toBe('-3.10%')
        })
    })

    describe('displayVol', () => {
        it('returns 0 for null ticker', () => {
            expect(displayVol(null)).toBe('0')
        })

        it('abbreviates volume', () => {
            const ticker = {
                quote: { USD: { vol24: 1500000 } },
            }
            expect(displayVol(ticker)).toBe('1.5m')
        })
    })
})
