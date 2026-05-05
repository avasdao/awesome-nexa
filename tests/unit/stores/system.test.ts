// tests/unit/stores/system.test.ts

import {
    describe, it, expect, vi, beforeEach, afterEach,
} from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSystemStore } from '~/stores/system'

// Mock $fetch at the ofetch level — this is what Nuxt's
// auto-imported $fetch resolves to under the hood.
const mockFetch = vi.fn()
vi.mock('ofetch', async (importOriginal) => {
    const original = await importOriginal() as Record<
        string, unknown
    >
    return {
        ...original,
        $fetch: (...args: unknown[]) => mockFetch(...args),
        ofetch: (...args: unknown[]) => mockFetch(...args),
    }
})

// Also stub globalThis.$fetch for any direct global access
vi.stubGlobal('$fetch', (...args: unknown[]) => mockFetch(...args))

// Mock navigator
vi.stubGlobal('navigator', {
    language: 'en-US',
    userAgent: 'vitest',
})

describe('System Store', () => {
    let store: ReturnType<typeof useSystemStore>

    beforeEach(() => {
        vi.useFakeTimers()
        setActivePinia(createPinia())
        store = useSystemStore()
        mockFetch.mockReset()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    describe('constants', () => {
        it('ONE_SAT is BigInt 1', () => {
            expect(store.ONE_SAT).toBe(BigInt('1'))
        })

        it('ONE_NEX is BigInt 100', () => {
            expect(store.ONE_NEX).toBe(BigInt('100'))
        })

        it('ONE_KEX is BigInt 100000', () => {
            expect(store.ONE_KEX).toBe(BigInt('100000'))
        })

        it('ONE_MEX is BigInt 100000000', () => {
            expect(store.ONE_MEX).toBe(BigInt('100000000'))
        })

        it('ONE_META is BigInt 1e18', () => {
            expect(store.ONE_META)
                .toBe(BigInt('1000000000000000000'))
        })

        it('WISERSWAP_API_ENDPOINT is correct', () => {
            expect(store.WISERSWAP_API_ENDPOINT)
                .toBe('https://wiserswap.com/v1')
        })
    })

    describe('initial notification state', () => {
        it('isShowing is false', () => {
            expect(store.notif.isShowing).toBe(false)
        })

        it('delay is 7000', () => {
            expect(store.notif.delay).toBe(7000)
        })
    })

    describe('usd getter', () => {
        it('returns 0.00 when ticker is null', () => {
            store._ticker = null
            expect(store.usd).toBe(0.00)
        })

        it('returns 0.00 when ticker is undefined', () => {
            store._ticker = undefined
            expect(store.usd).toBe(0.00)
        })

        it('returns 0.00 when quote is missing', () => {
            store._ticker = {}
            expect(store.usd).toBe(0.00)
        })

        it('returns 0.00 when quote.USD is missing', () => {
            store._ticker = { quote: {} }
            expect(store.usd).toBe(0.00)
        })

        it('returns 0.00 when quote.USD.price is missing',
            () => {
                store._ticker = { quote: { USD: {} } }
                expect(store.usd).toBe(0.00)
            }
        )

        it('returns 0.00 when quote.USD.price is null',
            () => {
                store._ticker = {
                    quote: { USD: { price: null } },
                }
                expect(store.usd).toBe(0.00)
            }
        )

        it('calculates formatted USD price correctly', () => {
            store._ticker = {
                quote: {
                    USD: { price: 0.00042 },
                },
            }
            // 0.00042 * 1000000.0 = 420.0
            expect(store.usd).toBe(420.0)
        })

        it('handles very small prices', () => {
            store._ticker = {
                quote: {
                    USD: { price: 0.0000001 },
                },
            }
            // 0.0000001 * 1000000.0 = 0.1
            expect(store.usd).toBe(0.1)
        })

        it('handles zero price', () => {
            store._ticker = {
                quote: {
                    USD: { price: 0 },
                },
            }
            expect(store.usd).toBe(0.0)
        })
    })

    describe('locale getter', () => {
        it('returns null when _locale is null', () => {
            store._locale = null
            expect(store.locale).toBeNull()
        })

        it('returns locale value when set', () => {
            store._locale = 'fr'
            expect(store.locale).toBe('fr')
        })
    })

    describe('init action', () => {
        it('increments _appStarts', () => {
            mockFetch.mockResolvedValue({})
            const before = store._appStarts
            store.init()
            expect(store._appStarts).toBe(before + 1)
        })

        it('increments _appStarts on each call', () => {
            mockFetch.mockResolvedValue({})
            store.init()
            store.init()
            store.init()
            expect(store._appStarts).toBe(3)
        })

        it('initializes _tickers if null', () => {
            mockFetch.mockResolvedValue({})
            store._tickers = null
            store.init()
            expect(store._tickers).toEqual({})
        })

        it('preserves existing _tickers', () => {
            mockFetch.mockResolvedValue({})
            store._tickers = { NEXA: { price: 1 } }
            store.init()
            expect(store._tickers.NEXA).toEqual({ price: 1 })
        })

        it('sets _locale from navigator when null', () => {
            mockFetch.mockResolvedValue({})
            store._locale = null
            store.init()
            expect(store._locale).toBe('en-US')
        })

        it('does not overwrite existing _locale', () => {
            mockFetch.mockResolvedValue({})
            store._locale = 'zh'
            store.init()
            expect(store._locale).toBe('zh')
        })

        it('calls updateTicker immediately', async () => {
            mockFetch.mockResolvedValue({})
            store.init()
            expect(mockFetch).toHaveBeenCalledWith(
                'https://wiserswap.com/v1/ticker/NEXA'
            )
        })

        it('sets 30s interval for ticker updates',
            async () => {
                mockFetch.mockResolvedValue({})
                store.init()
                mockFetch.mockClear()

                vi.advanceTimersByTime(30000)
                expect(mockFetch).toHaveBeenCalled()
            }
        )

        it('does not update before 30s', async () => {
            mockFetch.mockResolvedValue({})
            store.init()
            mockFetch.mockClear()

            vi.advanceTimersByTime(15000)
            expect(mockFetch).not.toHaveBeenCalled()
        })
    })

    describe('updateTicker action', () => {
        beforeEach(() => {
            if (!store._tickers) {
                store._tickers = {}
            }
        })

        it('fetches from WiserSwap endpoint', async () => {
            mockFetch.mockResolvedValue({
                quote: { USD: { price: 0.001 } },
            })

            await store.updateTicker()

            expect(mockFetch).toHaveBeenCalledWith(
                'https://wiserswap.com/v1/ticker/NEXA'
            )
        })

        it('stores the ticker response', async () => {
            const tickerData = {
                quote: { USD: { price: 0.001 } },
            }
            mockFetch.mockResolvedValue(tickerData)

            await store.updateTicker()

            expect(store._ticker).toEqual(tickerData)
        })

        it('initializes AVAS sub-ticker if missing',
            async () => {
                store._tickers = {}
                mockFetch.mockResolvedValue({})

                await store.updateTicker()

                expect(store._tickers.AVAS).toEqual({})
            }
        )

        it('initializes NEXA sub-ticker if missing',
            async () => {
                store._tickers = {}
                mockFetch.mockResolvedValue({})

                await store.updateTicker()

                expect(store._tickers.NEXA).toEqual({})
            }
        )

        it('does not overwrite existing AVAS data',
            async () => {
                store._tickers = {
                    AVAS: { existing: true },
                    NEXA: {},
                }
                mockFetch.mockResolvedValue({})

                await store.updateTicker()

                expect(store._tickers.AVAS.existing).toBe(true)
            }
        )

        it('handles fetch error gracefully', async () => {
            mockFetch.mockRejectedValue(
                new Error('Network error')
            )

            // Should not throw
            await store.updateTicker()
            expect(store._ticker).toBeUndefined()
        })
    })
})
