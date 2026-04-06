import { afterEach, vi, beforeAll } from 'vitest'
import { cleanup } from '@testing-library/react'

// S'assurer que le DOM est disponible avant tout
beforeAll(() => {
  if (typeof window === 'undefined') {
    throw new Error('jsdom is not initialized')
  }
})

// Nettoyage après chaque test
afterEach(() => {
  cleanup()
  vi.clearAllMocks()
  vi.clearAllTimers()
  
  // Nettoyer le DOM
  document.body.innerHTML = ''
})
