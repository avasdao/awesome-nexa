// tests/setup.ts

import { vi } from 'vitest'

// Stub $fetch globally for all tests
if (typeof globalThis.$fetch === 'undefined') {
    globalThis.$fetch = vi.fn()
}

// Stub navigator for SSR-safe tests
if (typeof globalThis.navigator === 'undefined') {
    Object.defineProperty(globalThis, 'navigator', {
        value: {
            language: 'en-US',
            userAgent: 'vitest',
        },
        writable: true,
        configurable: true,
    })
}

// Stub localStorage for layout/store persistence tests
if (typeof globalThis.localStorage === 'undefined') {
    const store: Record<string, string> = {}
    Object.defineProperty(globalThis, 'localStorage', {
        value: {
            getItem: vi.fn((key: string) => store[key] ?? null),
            setItem: vi.fn((key: string, val: string) => {
                store[key] = val
            }),
            removeItem: vi.fn((key: string) => {
                delete store[key]
            }),
            clear: vi.fn(() => {
                Object.keys(store).forEach((k) => delete store[k])
            }),
        },
        writable: true,
        configurable: true,
    })
}

// Stub window.open for Hero component tests
if (typeof globalThis.window !== 'undefined') {
    globalThis.window.open = vi.fn()
}
