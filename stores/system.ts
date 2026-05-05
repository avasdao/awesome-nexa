// stores/system.ts

/* Import modules. */
import { defineStore } from 'pinia'

/* Import modules. */
import { encodeAddress } from '@nexajs/address'

import {
    ripemd160,
    sha256,
} from '@nexajs/crypto'

import {
    encodeDataPush,
    OP,
} from '@nexajs/script'

import {
    binToHex,
    hexToBin,
} from '@nexajs/utils'

import './system/clipboard.ts'

/* Initialize constants. */
const UPDATE_TICKER_INTERVAL = 30000 // 30 seconds

/**
 * System Store
 */
export const useSystemStore = defineStore('system', {
    state: () => ({
        /* Set constants. */
        ONE_SAT: BigInt('1'),
        ONE_NEX: BigInt('100'),
        ONE_KEX: BigInt('100000'),
        ONE_MEX: BigInt('100000000'),
        ONE_META: BigInt('1000000000000000000'),

        /* Set WiserSwap API endpoint. */
        WISERSWAP_API_ENDPOINT: 'https://wiserswap.com/v1',

        /* Initialize notifications. */
        notif: {
            isShowing: false,
            icon: null,
            title: null,
            description: null,
            delay: 7000,
        },

        /**
         * Application Starts
         */
        _appStarts: 0,

        /**
         * Application Version
         */
        _appVersion: null,

        /**
         * Flags
         *
         * 1. Dark mode
         * 2. Unconfirmed transactions
         */
        _flags: null,

        /**
         * Locale
         *
         * Controls the localization language.
         * (default is english)
         */
        _locale: null,

        /**
         * Notices
         *
         * System notices that nag/remind the user of some important action or
         * information; which can be permanently disabled ("Do Not Show Again")
         * via checkbox and confirmation.
         *
         * NOTE: Unique 1-byte (hex) codes (up to 255) are used to reduce the size
         *       of this storage field.
         */
        _notices: null,

        _ticker: null,

        /**
         * Tickers
         *
         * Support for multiple exchange tickers across multiple currencies.
         */
        _tickers: null,
    }),

    getters: {
        ticker(_state) {
            return _state._ticker
        },

        tickers(_state) {
            return _state._tickers
        },

        usd(_state) {
            if (typeof _state._ticker === 'undefined' || !_state._ticker) {
                return 0.00
            }

            /* Set ticker. */
            const ticker = _state._ticker

            /* Validate ticker. */
            if (typeof ticker === 'undefined' || !ticker) {
                return 0.00
            }

            /* Set quote. */
            const quote = ticker.quote

            /* Validate quote. */
            if (typeof quote === 'undefined' || !quote) {
                return 0.00
            }

            /* Set price. */
            const usd = quote.USD?.price

            /* Validate price. */
            if (typeof usd === 'undefined' || usd === null) {
                return 0.00
            }

            /* Set (formatted) price. */
            const formatted = parseFloat((usd * 1000000.0).toFixed(4))

            /* Return (formatted) price. */
            return formatted
        },

        locale(_state) {
            if (!_state._locale) {
                return null
            }

            return _state._locale
        },
    },

    actions: {
        /**
         * Initialize Application
         *
         * Performs startup activities.
         */
        init() {
            this._appStarts++

            /* Validate tickers. */
            if (!this._tickers) {
                /* Initialize tickers. */
                this._tickers = {}
            }

            /* Initialize ticker interval. */
            setInterval(this.updateTicker, UPDATE_TICKER_INTERVAL)

            /* Update ticker. */
            this.updateTicker()

            if (this._locale === null) {
                /* Set (library) locale from (store) locale. */
                this._locale = navigator.language || navigator.userLanguage
                console.log(`User's preferred language is:`, this.locale)
            }

            /* Initialize (library) locale. */
            const { locale } = useI18n()

            /* Set (library) locale. */
            locale.value = this.locale
        },

        async updateTicker() {
            this._ticker = await $fetch(this.WISERSWAP_API_ENDPOINT + '/ticker/NEXA')
                .catch(err => console.error(err))
            // console.info('SYSTEM (update ticker):', this.ticker)

            if (!this._tickers.AVAS) {
                this._tickers.AVAS = {}
            }

            if (!this._tickers.NEXA) {
                this._tickers.NEXA = {}
            }

            // this._tickers.AVAS = await $fetch('https://wiserswap.com/v1/ticker/quote/57f46c1766dc0087b207acde1b3372e9f90b18c7e67242657344dcd2af660000')

            // this._tickers.NEXA = await $fetch('https://wiserswap.com/ticker')
        },
    },
})
