import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Services from '../Services';

describe('Page Services', () => {
  it('affiche la section Plantes après sélection du bouton correspondant', async () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <Services />
        </BrowserRouter>
      </HelmetProvider>
    );

    const plantesTab = screen.getByRole('button', { name: /plantes/i });
    fireEvent.click(plantesTab);

    expect(
      await screen.findByRole('heading', { name: /plantes/i })
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole('button', { name: /demander un devis/i })
    ).not.toHaveLength(0);
  });
});

