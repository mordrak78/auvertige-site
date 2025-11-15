import * as React from 'react';
import Layout from '@/components/layout/layout/Layout';
import Seo from '@/components/shared/Seo';

const MentionsLegales = () => {
  return (
    <Layout>
      <Seo
        title="Mentions Légales - Au Vertige"
        description="Mentions légales, politique de confidentialité et RGPD d'Au Vertige, fleuriste à Nantes."
        type="website"
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Mentions Légales", url: "/mentions-legales" }
        ]}
      />
      <main className="min-h-screen bg-cream-50 pt-24">
        <div className="container mx-auto px-4 max-w-4xl py-12">
          <h1 className="text-4xl font-dancing text-sage-700 mb-8 text-center">Mentions Légales</h1>

          {/* Section 1: Éditeur du site */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-sage-700 mb-4">Éditeur du site</h2>
            <div className="space-y-2 text-sage-600">
              <p><strong>Raison sociale :</strong> Au Vertige – Artisan Fleuriste</p>
              <p><strong>Adresse :</strong> 38, boulevard Joliot Curie<br />44200 Nantes – France</p>
              <p><strong>Téléphone :</strong> 02 40 54 10 02</p>
              <p><strong>Email :</strong> guillaume.fleurs@orange.fr</p>
              <p><strong>SIRET :</strong> 50016072600013</p>
              <p><strong>Responsable de la publication :</strong> Sylvie ARCHAMBEAU</p>
            </div>
          </section>

          {/* Section 2: Hébergement */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-sage-700 mb-4">Hébergement</h2>
            <div className="space-y-2 text-sage-600">
              <p>Le site www.auvertige.fr est hébergé par :</p>
              <p>[Nom de l'hébergeur, ex. OVH]</p>
              <p>Adresse : [À compléter]</p>
              <p>Téléphone : [À compléter]</p>
              <p>Site : [ex. www.ovh.com]</p>
            </div>
          </section>

          {/* Section 3: Propriété intellectuelle */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-sage-700 mb-4">Propriété intellectuelle</h2>
            <div className="space-y-4 text-sage-600">
              <p>
                L'ensemble des éléments (textes, images, logos, graphismes, vidéos, icônes, sons, etc.) du site www.auvertige.fr est la propriété exclusive de Au Vertige, sauf mention contraire.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Au Vertige.
              </p>
            </div>
          </section>

          {/* Section 4: Données personnelles et RGPD */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-sage-700 mb-4">Données personnelles et Protection des données (RGPD)</h2>
            
            <div className="space-y-6 text-sage-600">
              <div>
                <h3 className="text-xl font-semibold text-sage-700 mb-3">1. Collecte des données</h3>
                <p className="mb-2">Nous collectons les données suivantes :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Nom et prénom</li>
                  <li>Adresse e-mail</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-sage-700 mb-3">2. Utilisation des données</h3>
                <p className="mb-2">Les données collectées sont utilisées pour :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Traiter vos commandes</li>
                  <li>Vous contacter concernant votre commande</li>
                  <li>Vous envoyer des informations sur nos services</li>
                </ul>
                <p className="mt-4">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), les informations recueillies via les formulaires du site sont destinées exclusivement à Au Vertige pour le traitement des demandes clients ou commandes.
                </p>
                <p className="mt-2">Aucune donnée personnelle n'est cédée à des tiers.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-sage-700 mb-3">3. Protection des données</h3>
                <p>
                  Nous mettons en œuvre des mesures de sécurité pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-sage-700 mb-3">4. Vos droits</h3>
                <p className="mb-2">Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Droit d'accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                  <li>Droit d'opposition</li>
                </ul>
                <p className="mt-4">
                  Pour exercer vos droits, contactez-nous par email à : <strong>guillaume.fleurs@orange.fr</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Cookies */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-sage-700 mb-4">Cookies</h2>
            <div className="space-y-4 text-sage-600">
              <p>
                Le site www.auvertige.fr peut être amené à déposer des cookies pour améliorer l'expérience utilisateur, analyser le trafic ou permettre certaines fonctionnalités.
              </p>
              <p>
                Vous pouvez configurer vos préférences à tout moment via le bandeau cookies affiché lors de votre première visite.
              </p>
            </div>
          </section>

          {/* Section 6: Conditions d'utilisation */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-sage-700 mb-4">Conditions d'utilisation</h2>
            <div className="space-y-4 text-sage-600">
              <p>
                L'utilisation du site www.auvertige.fr implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-dessus. Ces conditions sont susceptibles d'être modifiées ou complétées à tout moment.
              </p>
            </div>
          </section>

          {/* Section 7: Contact */}
          <section className="mb-12 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-sage-700 mb-4">Contact</h2>
            <div className="space-y-2 text-sage-600">
              <p>Pour toute question concernant vos données personnelles ou ce site, contactez-nous :</p>
              <p>
                <strong>Au Vertige – Artisan Fleuriste</strong><br />
                38, boulevard Joliot Curie<br />
                44200 Nantes – France<br />
                Tél. : 02 40 54 10 02<br />
                E-mail : guillaume.fleurs@orange.fr
              </p>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default MentionsLegales;

