// composables/useFormats.ts

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

/**
 * useFormats
 *
 * Drop-in replacements for numeral() and moment() formatting
 * used throughout the application.
 */
export function useFormats() {

    /**
     * Format Number
     *
     * Replaces numeral(value).format(pattern)
     * Supports patterns: '0,0' '0,0.00' '0.00%' '0[.]0a' '0[.]0 ib' '0,0.00[000000]'
     */
    const formatNumber = (value: number | bigint | string | null | undefined, pattern: string): string => {
        if (value === null || value === undefined || value === '') {
            return '0'
        }

        const num = typeof value === 'bigint' ? Number(value) : Number(value)

        if (isNaN(num)) {
            return '0'
        }

        switch (pattern) {
        case '0,0':
            return num.toLocaleString('en-US', { maximumFractionDigits: 0 })

        case '0,0.00':
            return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        case '0,0.00[000000]':
            // Show at least 2 decimals, up to 8 if non-zero
            return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 8 })

        case '$0,0.00':
            return num.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 })

        case '0.00%':
            // Input is already a ratio (e.g. 0.05 = 5%)
            return (num * 100).toFixed(2) + '%'

        case '0[.]0a': {
            // Abbreviate: 1.2k, 3.4M, 5.6B, etc.
            const abs = Math.abs(num)
            const sign = num < 0 ? '-' : ''

            if (abs >= 1e12) {
                return sign + (abs / 1e12).toFixed(1) + 't'
            }
            if (abs >= 1e9) {
                return sign + (abs / 1e9).toFixed(1) + 'b'
            }
            if (abs >= 1e6) {
                return sign + (abs / 1e6).toFixed(1) + 'm'
            }
            if (abs >= 1e3) {
                return sign + (abs / 1e3).toFixed(1) + 'k'
            }
            return sign + abs.toFixed(1)
        }

        case '0[.]0 ib': {
            // Format bytes: KB, MB, GB
            const abs = Math.abs(num)
            const sign = num < 0 ? '-' : ''

            if (abs >= 1073741824) {
                return sign + (abs / 1073741824).toFixed(1) + ' GiB'
            }
            if (abs >= 1048576) {
                return sign + (abs / 1048576).toFixed(1) + ' MiB'
            }
            if (abs >= 1024) {
                return sign + (abs / 1024).toFixed(1) + ' KiB'
            }
            return sign + abs.toFixed(1) + ' B'
        }

        case '0[.]0':
            return num.toFixed(1)

        default:
            return num.toLocaleString('en-US')
        }
    }

    /**
     * Format Time Ago
     *
     * Replaces moment.unix(ts).fromNow()
     */
    const formatTimeAgo = (unixTimestamp: number): string => {
        return dayjs.unix(unixTimestamp).fromNow()
    }

    /**
     * Format Duration Humanize
     *
     * Replaces moment.duration(val, 'seconds').humanize()
     */
    const formatDurationHumanize = (seconds: number): string => {
        return dayjs.duration ? dayjs.duration(seconds, 'seconds').humanize() : `${Math.round(seconds)}s`
    }

    return {
        formatNumber,
        formatTimeAgo,
        formatDurationHumanize,
    }
}
