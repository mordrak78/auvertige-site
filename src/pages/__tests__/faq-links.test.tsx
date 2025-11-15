import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Services from '../Services'

beforeAll(() => {
  class IntersectionObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: IntersectionObserverMock,
  })

  window.scrollTo = vi.fn()
})

const renderServicesPage = () =>
  render(
    <HelmetProvider>
      <BrowserRouter>
        <Services />
      </BrowserRouter>
    </HelmetProvider>
  )

describe('FAQ Services - liens stratégiques', () => {
  it('contient une question horaires avec lien vers la page Ouvert dimanche', () => {
    renderServicesPage()

    const horairesButton = screen.getByRole('button', {
      name: /horaires.*dimanche/i,
    })

    fireEvent.click(horairesButton)

    const sundayLink = screen.getByRole('link', {
      name: /nos horaires complets/i,
    })

    expect(sundayLink).toHaveAttribute(
      'href',
      '/fleuriste-ouvert-dimanche-nantes'
    )
  })

  it('propose un lien direct vers le formulaire de contact pour les bouquets personnalisés', () => {
    renderServicesPage()

    const commandeButton = screen.getByRole('button', {
      name: /bouquet personnalisé/i,
    })

    fireEvent.click(commandeButton)

    const contactLink = screen.getByRole('link', {
      name: /formulaire de contact/i,
    })

    expect(contactLink).toHaveAttribute('href', '/contact')
  })

  it('liste une question dédiée aux ateliers floraux', () => {
    renderServicesPage()

    expect(
      screen.getByRole('button', { name: /ateliers floraux/i })
    ).toBeInTheDocument()
  })
})


