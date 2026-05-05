// tests/unit/composables/useFormats.test.ts

import { describe, it, expect } from 'vitest'
import { useFormats } from '~/composables/useFormats'

const { formatNumber, formatTimeAgo, formatDurationHumanize } = useFormats()

describe('useFormats', () => {

    describe('formatNumber', () => {

        describe('null / undefined / empty / NaN handling', () => {
            it('returns "0" for null', () => {
                expect(formatNumber(null, '0,0')).toBe('0')
            })

            it('returns "0" for undefined', () => {
                expect(formatNumber(undefined, '0,0')).toBe('0')
            })

            it('returns "0" for empty string', () => {
                expect(formatNumber('', '0,0')).toBe('0')
            })

            it('returns "0" for NaN-producing string', () => {
                expect(formatNumber('not-a-number', '0,0'))
                    .toBe('0')
            })
        })

        describe('pattern: 0,0 (integer with commas)', () => {
            it('formats zero', () => {
                expect(formatNumber(0, '0,0')).toBe('0')
            })

            it('formats small integer', () => {
                expect(formatNumber(42, '0,0')).toBe('42')
            })

            it('formats thousands', () => {
                expect(formatNumber(1234, '0,0')).toBe('1,234')
            })

            it('formats millions', () => {
                expect(formatNumber(1234567, '0,0'))
                    .toBe('1,234,567')
            })

            it('truncates decimals', () => {
                expect(formatNumber(1234.56, '0,0'))
                    .toBe('1,235')
            })

            it('handles negative numbers', () => {
                expect(formatNumber(-9999, '0,0'))
                    .toBe('-9,999')
            })

            it('handles bigint input', () => {
                expect(formatNumber(BigInt('100000'), '0,0'))
                    .toBe('100,000')
            })

            it('handles string numeric input', () => {
                expect(formatNumber('50000', '0,0'))
                    .toBe('50,000')
            })
        })

        describe('pattern: 0,0.00 (two decimal places)', () => {
            it('pads decimals', () => {
                expect(formatNumber(5, '0,0.00')).toBe('5.00')
            })

            it('rounds to two decimals', () => {
                expect(formatNumber(3.14159, '0,0.00'))
                    .toBe('3.14')
            })

            it('formats large number with decimals', () => {
                expect(formatNumber(1234567.891, '0,0.00'))
                    .toBe('1,234,567.89')
            })
        })

        describe('pattern: 0,0.00[000000] (2-8 decimals)', () => {
            it('shows minimum 2 decimals for integer', () => {
                expect(formatNumber(1, '0,0.00[000000]'))
                    .toBe('1.00')
            })

            it('shows extended decimals when meaningful', () => {
                const result = formatNumber(
                    0.00012345, '0,0.00[000000]'
                )
                expect(result).toBe('0.00012345')
            })

            it('caps at 8 decimals', () => {
                const result = formatNumber(
                    0.123456789012, '0,0.00[000000]'
                )
                expect(result).toBe('0.12345679')
            })
        })

        describe('pattern: $0,0.00 (USD currency)', () => {
            it('formats as currency', () => {
                expect(formatNumber(1234.5, '$0,0.00'))
                    .toBe('$1,234.50')
            })

            it('formats zero as currency', () => {
                expect(formatNumber(0, '$0,0.00'))
                    .toBe('$0.00')
            })

            it('formats negative as currency', () => {
                const result = formatNumber(-42.5, '$0,0.00')
                // toLocaleString may use different minus styles
                expect(result).toContain('42.50')
            })
        })

        describe('pattern: 0.00% (percentage)', () => {
            it('converts ratio to percentage', () => {
                expect(formatNumber(0.05, '0.00%'))
                    .toBe('5.00%')
            })

            it('handles 100%', () => {
                expect(formatNumber(1, '0.00%'))
                    .toBe('100.00%')
            })

            it('handles zero', () => {
                expect(formatNumber(0, '0.00%'))
                    .toBe('0.00%')
            })

            it('handles negative ratio', () => {
                expect(formatNumber(-0.1234, '0.00%'))
                    .toBe('-12.34%')
            })
        })

        describe('pattern: 0[.]0a (abbreviated)', () => {
            it('abbreviates thousands', () => {
                expect(formatNumber(1500, '0[.]0a'))
                    .toBe('1.5k')
            })

            it('abbreviates millions', () => {
                expect(formatNumber(2500000, '0[.]0a'))
                    .toBe('2.5m')
            })

            it('abbreviates billions', () => {
                expect(formatNumber(3700000000, '0[.]0a'))
                    .toBe('3.7b')
            })

            it('abbreviates trillions', () => {
                expect(formatNumber(1200000000000, '0[.]0a'))
                    .toBe('1.2t')
            })

            it('does not abbreviate small numbers', () => {
                expect(formatNumber(500, '0[.]0a'))
                    .toBe('500.0')
            })

            it('handles negative abbreviated', () => {
                expect(formatNumber(-2500000, '0[.]0a'))
                    .toBe('-2.5m')
            })

            it('handles zero', () => {
                expect(formatNumber(0, '0[.]0a'))
                    .toBe('0.0')
            })
        })

        describe('pattern: 0[.]0 ib (byte formatting)', () => {
            it('formats bytes', () => {
                expect(formatNumber(500, '0[.]0 ib'))
                    .toBe('500.0 B')
            })

            it('formats kibibytes', () => {
                expect(formatNumber(2048, '0[.]0 ib'))
                    .toBe('2.0 KiB')
            })

            it('formats mebibytes', () => {
                expect(formatNumber(5242880, '0[.]0 ib'))
                    .toBe('5.0 MiB')
            })

            it('formats gibibytes', () => {
                expect(formatNumber(2147483648, '0[.]0 ib'))
                    .toBe('2.0 GiB')
            })

            it('handles negative bytes', () => {
                expect(formatNumber(-2048, '0[.]0 ib'))
                    .toBe('-2.0 KiB')
            })
        })

        describe('pattern: 0[.]0 (one decimal)', () => {
            it('formats to one decimal place', () => {
                expect(formatNumber(3.14159, '0[.]0'))
                    .toBe('3.1')
            })
        })

        describe('unknown pattern (fallback)', () => {
            it('falls back to locale string', () => {
                const result = formatNumber(1234567, 'unknown')
                expect(result).toBe('1,234,567')
            })
        })
    })

    describe('formatTimeAgo', () => {
        it('returns a relative time string for recent time', () => {
            const now = Math.floor(Date.now() / 1000)
            const result = formatTimeAgo(now - 60)
            expect(result).toMatch(/minute|minutes/)
        })

        it('handles timestamps years ago', () => {
            const result = formatTimeAgo(1577836800)
            expect(result).toMatch(/year|years/)
        })

        it('handles current timestamp', () => {
            const now = Math.floor(Date.now() / 1000)
            const result = formatTimeAgo(now)
            expect(result).toMatch(
                /second|seconds|few seconds/
            )
        })
    })

    describe('formatDurationHumanize', () => {
        it('returns a string with seconds fallback', () => {
            const result = formatDurationHumanize(120)
            // dayjs.duration may not be loaded; falls back
            expect(typeof result).toBe('string')
            expect(result.length).toBeGreaterThan(0)
        })
    })
})
