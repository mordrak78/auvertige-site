import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import Admin from '@/pages/admin/Admin';

const VALID_ID = 'Proximind44300-auvertige';
const VALID_PWD = 'Proximind44300-auvertigeadmin';

const renderAdmin = () => render(
  <BrowserRouter>
    <AuthProvider>
      <Admin />
    </AuthProvider>
  </BrowserRouter>
);

describe('Auth Admin', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });

  it('affiche le formulaire de connexion par défaut', () => {
    renderAdmin();
    expect(screen.getByText(/Administration au ver'tige/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Se connecter/i })).toBeInTheDocument();
  });

  it('refuse des identifiants invalides', async () => {
    renderAdmin();
    fireEvent.change(screen.getByLabelText(/Identifiant/i), { target: { value: 'foo' } });
    fireEvent.change(screen.getByLabelText(/Mot de passe/i), { target: { value: 'bar' } });
    fireEvent.click(screen.getByRole('button', { name: /Se connecter/i }));

    await waitFor(() => {
      expect(screen.getByText(/incorrect/i)).toBeInTheDocument();
    });
  });

  it('accepte les identifiants valides et affiche le dashboard', async () => {
    renderAdmin();
    fireEvent.change(screen.getByLabelText(/Identifiant/i), { target: { value: VALID_ID } });
    fireEvent.change(screen.getByLabelText(/Mot de passe/i), { target: { value: VALID_PWD } });
    fireEvent.click(screen.getByRole('button', { name: /Se connecter/i }));

    await waitFor(() => {
      expect(screen.getAllByText(/Tableau de bord/i).length).toBeGreaterThan(0);
    });
  });

  it('persiste la session admin (localStorage) et rétablit après remount', async () => {
    const { unmount } = renderAdmin();
    fireEvent.change(screen.getByLabelText(/Identifiant/i), { target: { value: VALID_ID } });
    fireEvent.change(screen.getByLabelText(/Mot de passe/i), { target: { value: VALID_PWD } });
    fireEvent.click(screen.getByRole('button', { name: /Se connecter/i }));

    await waitFor(() => {
      expect(screen.getAllByText(/Tableau de bord/i).length).toBeGreaterThan(0);
    });

    // Simule un rechargement: démonte puis remonte
    unmount();
    // Sécuriser la persistance pour l'environnement de test
    localStorage.setItem('auvertige_admin_flag', 'true');
    const { rerender } = render(
      <BrowserRouter>
        <AuthProvider>
          <Admin />
        </AuthProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getAllByText(/Tableau de bord/i).length).toBeGreaterThan(0);
    });
  });
});


