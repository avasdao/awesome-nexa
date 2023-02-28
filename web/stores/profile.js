/* Import modules. */
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

/**
 * Profile Store
 */
export const useProfileStore = defineStore('profile', {
    state: () => ({
        /* Initialize session. */
        session: null,

        // TBD
    }),

    getters: {
        sessionid(_state) {
            return _state.session?.id
        },
    },

    actions: {
        async initSession () {
            /* Check for existing session. */
            if (this.session) {
                return session
            }

            /* Request new session. */
            const session = await $fetch('/newSession')
            // console.log('INIT SESSION', session)

            /* Set session. */
            this._setSession(session)

            /* Return session. */
            return session
        },

        deleteSession() {
            /* Set session. */
            _setSession(null)

            /* Set cash accounts. */
            _setCashAccounts(null)
        },

        /**
         * Set Session
         *
         * @param {Object} _session Save session details.
         */
        _setSession (_session) {
            /* Set session. */
            this.session = _session
        },
    },
    persist: true,
})
