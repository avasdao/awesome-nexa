// tests/unit/stores/profile.test.ts

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProfileStore } from '~/stores/profile'

// Mock $fetch
const mockFetch = vi.fn()
vi.stubGlobal('$fetch', mockFetch)

describe('Profile Store', () => {
    let store: ReturnType<typeof useProfileStore>

    beforeEach(() => {
        setActivePinia(createPinia())
        store = useProfileStore()
        mockFetch.mockReset()
    })

    describe('initial state', () => {
        it('has null session', () => {
            expect(store._session).toBeNull()
        })

        it('has null address', () => {
            expect(store._address).toBeNull()
        })

        it('has null pubkey', () => {
            expect(store._pubkey).toBeNull()
        })
    })

    describe('getters', () => {
        it('session returns _session', () => {
            expect(store.session).toBeNull()
        })

        it('sessionid returns session id when set', () => {
            store._session = {
                id: 'abc-123',
                challenge: 'xyz',
            }
            expect(store.sessionid).toBe('abc-123')
        })

        it('sessionid returns undefined when no session',
            () => {
                expect(store.sessionid).toBeUndefined()
            }
        )

        it('challenge returns session challenge', () => {
            store._session = {
                id: 'abc',
                challenge: 'test-ch',
            }
            expect(store.challenge).toBe('test-ch')
        })

        it('challenge returns undefined when no session',
            () => {
                expect(store.challenge).toBeUndefined()
            }
        )
    })

    describe('initSession', () => {
        it('fetches new session when none exists',
            async () => {
                const mockSession = {
                    id: 'new-session',
                    challenge: 'ch-001',
                }
                mockFetch.mockResolvedValueOnce(mockSession)

                const result = await store.initSession()

                expect(mockFetch).toHaveBeenCalledWith(
                    '/api/newSession'
                )
                expect(result).toEqual(mockSession)
                expect(store.session).toEqual(mockSession)
            }
        )

        it('returns existing session without fetching',
            async () => {
                const existing = {
                    id: 'existing',
                    challenge: 'ch-old',
                }
                store._session = existing

                const result = await store.initSession()

                expect(mockFetch).not.toHaveBeenCalled()
                expect(result).toEqual(existing)
            }
        )
    })

    describe('deleteSession', () => {
        it('clears the session', () => {
            store._session = {
                id: 'to-delete',
                challenge: 'x',
            }
            store.deleteSession()
            expect(store.session).toBeNull()
        })
    })

    describe('saveSession', () => {
        it('persists a session object', () => {
            const newSession = {
                id: 'saved',
                challenge: 'ch-s',
            }
            store.saveSession(newSession)
            expect(store.session).toEqual(newSession)
        })

        it('can overwrite an existing session', () => {
            store._session = { id: 'old', challenge: 'old-ch' }
            const newSession = { id: 'new', challenge: 'new-ch' }
            store.saveSession(newSession)
            expect(store.session).toEqual(newSession)
        })
    })
})
