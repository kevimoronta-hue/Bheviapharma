# Spec Design — Site Vitrine Bhevia Pharma

**Date :** 2026-04-04
**Auteur :** Antigravity (session brainstorming)
**Statut :** ✅ Validé par l'utilisateur

---

## 1. Contexte & Objectif

Bhevia Pharma est une structure de formation professionnelle en pharmacie officinale, fondée et présidée par **Benjamin Hérisson**. Le site vitrine a pour objectif de :
- Asseoir la crédibilité et l'autorité de Bhevia Pharma dans le secteur de la formation pharmaceutique
- Présenter la/les formation(s) disponible(s) de manière claire et convaincante
- Générer des prises de contact qualifiées (pharmaciens, groupements, officines)

---

## 2. Architecture du Site (Multi-Pages)

| Page | URL | Rôle |
|---|---|---|
| Accueil | `/index.html` | Présentation globale + conversion |
| Formation | `/formation.html` | Détail complet de la formation |
| À propos | `/a-propos.html` | Bio de Benjamin Hérisson |
| Contact | `/contact.html` | Formulaire + coordonnées |

---

## 3. Design System

### Couleurs
| Token | Valeur | Usage |
|---|---|---|
| `--color-primary` | `#1B2B5E` | Bleu marine (extrait logo) |
| `--color-accent` | `#F5A723` | Orange triangle (extrait logo) |
| `--color-background` | `#FAFAF9` | Fond crème chaud |
| `--color-surface` | `#FFFFFF` | Cartes, sections blanches |
| `--color-text` | `#0C0A09` | Texte principal |
| `--color-text-muted` | `#6B7280` | Texte secondaire |
| `--color-border` | `#E5E7EB` | Bordures subtiles |

### Typographie
- **Titres** : `DM Sans` — weights 700, 600 (Google Fonts)
- **Corps** : `DM Sans` — weights 400, 500
- **Hiérarchie** : H1 56px · H2 40px · H3 28px · Body 16px · Small 14px

### Espacements (grille 8px)
- XS: 8px · SM: 16px · MD: 24px · LG: 48px · XL: 80px · XXL: 120px

### Effets & Animations
- Transitions : 200–300ms ease-in-out
- Hover cartes : `translateY(-4px)` + ombre douce
- Apparition au scroll : `opacity 0→1` + `translateY(20px→0)`
- Style général : "Liquid Glass" — espace blanc généreux, no borders sauf accent

### Icônes
- **Lucide Icons** (SVG inline) — trait 1.5px, couleur `--color-primary`

---

## 4. Navigation

```
[Logo Bhevia Pharma]   Accueil   Formation   À propos   Contact   [Nous contacter →]
```
- Sticky au scroll (fond blanc + ombre subtile après 60px de scroll)
- Lien "Nous contacter" → bouton CTA orange arrondi
- Mobile : hamburger → menu plein écran

---

## 5. Contenu Page par Page

### 5.1 Page Accueil (`index.html`)

**Section 1 — Hero**
- Titre H1 : "Élevez l'excellence de votre équipe officinale"
- Sous-titre : "Formations professionnelles en pharmacie officinale — Entre impact, confiance et performance."
- Photo de Benjamin Hérisson à droite (style editorial, fond neutre)
- CTA primaire : "Découvrir la formation →" (orange)
- CTA secondaire : "Nous contacter" (outline bleu)
- Badge discret : "Bhevia Pharma · Formation certifiée"

**Section 2 — Chiffres clés (Stats)**
- 2 journées de formation
- 14 heures de pratique
- Cas réels au comptoir
- Approche terrain certifiée

**Section 3 — Bénéfices (Les 3 compétences visées)**
Cards avec icône SVG :
1. "Conseil pharmaceutique adapté, sécurisé et personnalisé"
2. "Communication professionnelle et fidélisation patient"
3. "Solutions naturelles intégrées à la stratégie officinale"

**Section 4 — Aperçu de la Formation**
- Titre : "Médication familiale & Conseil pharmaceutique"
- Sous-titre : "Entre impact & confiance"
- Résumé de l'objectif général
- Programme condensé Jour 1 / Jour 2 (accordéon ou tabs)
- CTA : "Voir le programme complet →"

**Section 5 — À propos (Brief)**
- Photo Benjamin + citation d'autorité
- 2-3 lignes de bio
- Lien : "En savoir plus sur Benjamin →"

**Section 6 — Témoignages**
- 3 cartes témoignages (placeholders réalistes : Pharmacien, Préparateur, Titulaire)
- Citation + nom + poste + étoiles

**Section 7 — CTA Final**
- Fond bleu marine plein
- Titre : "Prêt à transformer votre officine ?"
- CTA : "Contacter Bhevia Pharma →"

---

### 5.2 Page Formation (`formation.html`)

- Hero : Titre de la formation + accroche + badge "2 jours · 14h"
- Objectif général (bloc éditorial)
- Compétences professionnelles visées (3 colonnes)
- Objectifs opérationnels (liste structurée)
- Programme Jour 1 : 3 modules détaillés + cas pratiques
- Programme Jour 2 : 3 modules détaillés + évaluation
- Pré-requis : Positionnement en amont (auto-évaluation)
- CTA bas de page : "Inscrivez votre équipe →"

---

### 5.3 Page À propos (`a-propos.html`)

- Hero : Photo pleine largeur Benjamin + titre "Président Bhevia Pharma"
- Bio complète (à intégrer / placeholder si non fournie)
- Vision & mission de Bhevia Pharma
- CTA : "Découvrir nos formations →"

---

### 5.4 Page Contact (`contact.html`)

- Titre : "Parlons de votre projet de formation"
- Formulaire : Nom, Prénom, Email, Téléphone, Officine/Structure, Message
- CTA submit : "Envoyer ma demande" (orange)
- Infos de contact (email, téléphone si disponible)
- Note légale RGPD discrète

---

## 6. Contraintes Techniques

- HTML5 sémantique + CSS Vanilla + JS Vanilla (pas de framework)
- Responsive : 375px · 768px · 1024px · 1440px
- WCAG AA : ratio texte minimum 4.5:1
- Performance : images optimisées, pas de JS bloquant
- Assets : Logo Bhevia Pharma + Photo Benjamin Hérisson fournis par le client

---

## 7. Critères de Succès

- [ ] Design fidèle au logo Bhevia Pharma (bleu #1B2B5E + orange #F5A723)
- [ ] Navigation sticky fonctionnelle + mobile responsive
- [ ] Animations au scroll fluides (requestAnimationFrame / IntersectionObserver)
- [ ] Formulaire de contact fonctionnel (HTML natif)
- [ ] Toutes les sections de contenu spécifiées sont présentes
