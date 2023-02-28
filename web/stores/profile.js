/* Import modules. */
import { defineStore } from 'pinia'

/**
 * Profile Store
 */
export const useProfileStore = defineStore('profile', {
    state: () => {
        return {
            /* Initialize session. */
            session: null,
        }
    },
    // state: () => ({
    //     /* Initialize session. */
    //     session: null,

    //     // TBD
    // }),

    getters: {
        sessionid(_state) {
            return _state.session?.id
        },
    },

    actions: {
        async initSession () {
            console.log('INIT SESSION', this.session)
            /* Check for existing session. */
            if (this.session) {
                return this.session
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
        },

        /**
         * Set Session
         *
         * @param {Object} _session Save session details.
         */
        _setSession (_session) {
            /* Set session. */
            this.session = _session
            console.log('SET SESSION', this.session)
        },
    },
    persist: true,
})
