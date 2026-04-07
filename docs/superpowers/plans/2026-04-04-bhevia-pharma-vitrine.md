# Plan d'implémentation — Site Vitrine Bhevia Pharma

**Objectif :** Créer un site vitrine multi-pages premium pour Bhevia Pharma en HTML5/CSS Vanilla/JS Vanilla.
**Architecture :** 4 pages HTML liées par une navigation commune, un design system CSS centralisé, et des animations JS légères.
**Stack Technique :** HTML5 · CSS Vanilla (Custom Properties) · JS Vanilla (IntersectionObserver) · Google Fonts (DM Sans) · Lucide Icons (CDN)

---

## Structure des Fichiers

```
/dossier sans titre/
├── index.html                    [CRÉER]
├── formation.html                [CRÉER]
├── a-propos.html                 [CRÉER]
├── contact.html                  [CRÉER]
├── assets/
│   ├── css/
│   │   ├── styles.css            [CRÉER] — Design system + layout global
│   │   └── animations.css        [CRÉER] — Keyframes + scroll animations
│   ├── js/
│   │   └── main.js               [CRÉER] — Nav sticky, scroll reveal, mobile menu
│   └── images/
│       ├── logo-bhevia.png       [PLACER] — Logo fourni par client
│       └── benjamin-herisson.jpg [PLACER] — Photo fournie par client
└── docs/superpowers/             [DÉJÀ CRÉÉ]
```

---

### Tâche 1 : Design System CSS (`assets/css/styles.css`)
**Fichiers :**
- Créer : `assets/css/styles.css`

- [ ] Définir les CSS Custom Properties (tokens) dans `:root`
  ```css
  :root {
    --color-primary: #1B2B5E;
    --color-accent: #F5A723;
    --color-background: #FAFAF9;
    --color-surface: #FFFFFF;
    --color-text: #0C0A09;
    --color-text-muted: #6B7280;
    --color-border: #E5E7EB;
    --font-main: 'DM Sans', sans-serif;
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 24px;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
    --shadow-md: 0 4px 16px rgba(27,43,94,0.12);
    --shadow-lg: 0 12px 40px rgba(27,43,94,0.18);
    --transition: 250ms ease-in-out;
    --max-width: 1200px;
  }
  ```
- [ ] Reset CSS (box-sizing, margin, padding, list-style)
- [ ] Import Google Fonts DM Sans (400, 500, 600, 700)
- [ ] Styles typographiques globaux (h1→h6, p, a)
- [ ] Utilitaires : `.container`, `.section`, `.btn-primary`, `.btn-secondary`, `.btn-outline`
- [ ] Styles Navigation : `.navbar`, `.navbar-sticky`, `.nav-links`, `.nav-cta`, `.hamburger`
- [ ] Styles Footer : `.footer`
- [ ] Media queries breakpoints : 768px, 1024px, 1440px

---

### Tâche 2 : CSS Animations (`assets/css/animations.css`)
**Fichiers :**
- Créer : `assets/css/animations.css`

- [ ] Keyframe `fadeInUp` : `opacity 0→1` + `translateY(30px→0)`
- [ ] Classe `.reveal` (état initial caché) + `.reveal.visible` (état visible)
- [ ] Hover cartes : `transform: translateY(-4px)` + transition shadow
- [ ] Transition navbar : fond blanc + ombre au scroll
- [ ] Animation boutons : scale(0.97) au click + effet ripple léger
- [ ] `@media (prefers-reduced-motion: reduce)` → désactiver toutes les animations

---

### Tâche 3 : JS Principal (`assets/js/main.js`)
**Fichiers :**
- Créer : `assets/js/main.js`

- [ ] **Navbar sticky** : écouter `window.scroll`, ajouter classe `.navbar-sticky` après 60px
  ```js
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('navbar-sticky', window.scrollY > 60);
  });
  ```
- [ ] **Scroll Reveal** : `IntersectionObserver` sur tous les éléments `.reveal`
  ```js
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  ```
- [ ] **Menu mobile** : Toggle classe `.menu-open` sur `.nav-links` via click `.hamburger`
- [ ] **Lien actif** : Ajouter classe `.active` au lien nav correspondant à la page courante
- [ ] **Accordéon programme** (page formation) : Toggle `.open` sur click `.accordion-item`
- [ ] **Formulaire contact** : Validation HTML5 native + message de succès après submit

---

### Tâche 4 : Navigation Commune (`navbar` + `footer`)
**Fichiers :**
- Référence : sera incluse dans chaque HTML

- [ ] Composant navbar HTML :
  ```html
  <nav class="navbar" id="navbar">
    <div class="container navbar-inner">
      <a href="index.html" class="nav-logo">
        <img src="assets/images/logo-bhevia.png" alt="Bhevia Pharma" height="40">
      </a>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <!-- SVG Lucide Menu icon -->
      </button>
      <ul class="nav-links" id="nav-links">
        <li><a href="index.html">Accueil</a></li>
        <li><a href="formation.html">Formation</a></li>
        <li><a href="a-propos.html">À propos</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <a href="contact.html" class="btn-primary nav-cta">Nous contacter</a>
    </div>
  </nav>
  ```
- [ ] Composant footer HTML (bleu marine, liens, copyright Bhevia Pharma 2026)

---

### Tâche 5 : Page Accueil (`index.html`)
**Fichiers :**
- Créer : `index.html`

- [ ] `<head>` complet : charset, viewport, title "Bhevia Pharma — Formations en Pharmacie Officinale", meta description, og tags, links CSS
- [ ] **Section Hero** :
  - Grille 2 colonnes : texte gauche / image droite
  - H1 : "Élevez l'excellence de votre équipe officinale"
  - Sous-titre + 2 boutons CTA + badge autorité
  - Photo Benjamin avec décoration (fond bleu arrondi, badge flottant "Président Bhevia Pharma")
- [ ] **Section Stats** : 4 chiffres en grille (2 jours · 14h · Cas réels · Terrain certifié)
- [ ] **Section Bénéfices** : 3 cartes avec icône SVG Lucide + titre + description
- [ ] **Section Aperçu Formation** : Titre, accroche, résumé objectif, tabs Jour 1 / Jour 2, CTA
- [ ] **Section À propos Brief** : Photo + citation + bio courte + lien
- [ ] **Section Témoignages** : 3 cartes (étoiles, citation, nom, poste, officine)
- [ ] **Section CTA Final** : Fond `--color-primary`, titre, bouton CTA blanc
- [ ] Footer
- [ ] `<script src="assets/js/main.js">` en bas de body

---

### Tâche 6 : Page Formation (`formation.html`)
**Fichiers :**
- Créer : `formation.html`

- [ ] `<head>` : title "Formation — Médication Familiale & Conseil Pharmaceutique | Bhevia Pharma"
- [ ] **Hero Formation** : Fond bleu marine, titre H1 formation, sous-titre "Entre impact & confiance", badges "2 jours · 14h · Cas réels"
- [ ] **Objectif Général** : Bloc éditorial centré, texte de l'objectif complet
- [ ] **Compétences Visées** : 3 cards avec icône, titre, description (données de la plaquette)
- [ ] **Objectifs Opérationnels** : Liste en 3 colonnes avec points de la plaquette
- [ ] **Programme Jour 1** : Accordéon ou timeline avec 3 modules :
  1. Rôle stratégique du pharmacien
  2. Pathologies courantes et stratégies de conseil
  3. Clôture + restitution
- [ ] **Programme Jour 2** : Accordéon ou timeline avec 3 modules :
  1. Communication, posture et relation de confiance
  2. Phytothérapie, aromathérapie et micro-nutrition
  3. Évaluation, synthèse et plan d'action
- [ ] **Modalités** : Bloc "Positionnement en amont" + durée + format
- [ ] **CTA Bas** : "Inscrivez votre équipe → Nous contacter"
- [ ] Footer + script JS

---

### Tâche 7 : Page À propos (`a-propos.html`)
**Fichiers :**
- Créer : `a-propos.html`

- [ ] `<head>` : title "À propos — Benjamin Hérisson | Bhevia Pharma"
- [ ] **Hero** : Photo Benjamin grande format + titre "Benjamin Hérisson" + "Président, Bhevia Pharma"
- [ ] **Bio** : Texte placeholder professionnel (expert en pharmacie officinale, expérience terrain, vision de la formation continue)
- [ ] **Mission Bhevia Pharma** : Citation mise en avant + paragraphe de mission
- [ ] **CTA** : "Découvrir nos formations →"
- [ ] Footer + script JS

---

### Tâche 8 : Page Contact (`contact.html`)
**Fichiers :**
- Créer : `contact.html`

- [ ] `<head>` : title "Contact — Bhevia Pharma"
- [ ] **Hero** : Titre "Parlons de votre projet de formation" + sous-titre
- [ ] **Formulaire** : Champs (Prénom, Nom, Email, Téléphone, Structure/Officine, Message), tous avec `id` unique, validation `required`
- [ ] **Bouton submit** : "Envoyer ma demande" (orange), désactivé pendant submit
- [ ] **Message succès** (JS) : Bloc caché `.success-message` affiché après submit
- [ ] **Bloc infos** : Email + note RGPD
- [ ] Footer + script JS

---

### Tâche 9 : Sauvegarde des Assets Images
**Fichiers :**
- Placer : `assets/images/logo-bhevia.png`
- Placer : `assets/images/benjamin-herisson.jpg`

- [ ] Copier le logo Bhevia Pharma (fourni) vers `assets/images/logo-bhevia.png`
- [ ] Copier la photo de Benjamin Hérisson (fournie) vers `assets/images/benjamin-herisson.jpg`

---

### Tâche 10 : Vérification Finale
- [ ] Tester navigation entre les 4 pages (liens fonctionnels)
- [ ] Tester responsive sur 375px (mobile), 768px (tablette), 1440px (desktop)
- [ ] Vérifier contraste couleurs (texte blanc sur bleu marine ≥ 4.5:1)
- [ ] Vérifier animations au scroll (appear on scroll fonctionnel)
- [ ] Vérifier navbar sticky
- [ ] Vérifier menu hamburger mobile
- [ ] Vérifier formulaire (validation + message succès)
- [ ] Ouvrir `index.html` dans le navigateur et valider visuellement

---

## Mode d'exécution

Choix proposé à l'utilisateur :
- **Mode Automatique** : L'agent code toutes les tâches en continu, de 1 à 10, sans interruption
- **Mode Étape par étape** : L'agent valide chaque tâche avec l'utilisateur avant de passer à la suivante
