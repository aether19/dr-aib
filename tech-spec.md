# Tech Spec — Dr. Aib Amar

## Dépendances

| Package | Version | Usage |
|---------|---------|-------|
| react | ^19.0.0 | Framework UI |
| react-dom | ^19.0.0 | Rendu DOM |
| react-router-dom | ^7.1.0 | Routing client-side (multi-pages statiques) |
| locomotive-scroll | ^5.0.0 | Smooth scroll avec inertie + scroll events |
| framer-motion | ^12.0.0 | Orchestration animations React (entrées, transitions, hero) |
| vite | ^6.0.0 | Bundler / dev server |
| @vitejs/plugin-react | ^4.4.0 | Plugin Vite pour React |
| tailwindcss | ^4.0.0 | Utilitaire CSS |
| @tailwindcss/vite | ^4.0.0 | Intégration Tailwind avec Vite |
| typescript | ^5.7.0 | Typage statique |
| @types/react | ^19.0.0 | Types React |
| @types/react-dom | ^19.0.0 | Types ReactDOM |

---

## Inventaire des Composants

### Layout (partagés entre toutes les pages)

| Composant | Source | Notes |
|-----------|--------|-------|
| **NavigationHeader** | Custom | Header fixe avec scroll-aware styling, 3 dropdowns (desktop), menu plein écran mobile |
| **Footer** | Custom | 4 colonnes, identique sur toutes les pages |
| **CustomCursor** | Custom | Desktop uniquement. Deux éléments DOM positionnés en fixed, lerp RAF, état hover via event delegation |
| **PageLayout** | Custom | Wrapper qui initialise Locomotive Scroll, gère les transitions de page, conditionne le cursor, expose scroll instance via context |

### Sections (par page)

**Page Accueil (`/`) :**

| Composant | Source |
|-----------|--------|
| **HeroSection** | Custom |
| **MarqueeStrip** | Custom |
| **BiographieSection** | Custom |
| **StatsSection** | Custom |
| **InterventionsGridSection** | Custom |
| **PhilosophieSection** | Custom |
| **TemoignagesSection** | Custom |
| **CTAContactSection** | Custom |

**Page Docteur (`/docteur`) :**

| Composant | Source |
|-----------|--------|
| **DoctorHeroSection** | Custom |
| **BioCompleteSection** | Custom |
| **TabsSection** | Custom |
| **MediasSection** | Custom |

**Page Procédure (`/chirurgie/:slug`) — template pour 19 pages :**

| Composant | Source |
|-----------|--------|
| **ProcedureHeroSection** | Custom |
| **IntroductionSection** | Custom |
| **DeroulementSection** | Custom |
| **CandidatsSection** | Custom |
| **CTABookingSection** | Custom |
| **RelatedProceduresSection** | Custom |

**Page Contact (`/contact`) :**

| Composant | Source |
|-----------|--------|
| **ContactHeroSection** | Custom |
| **FormCoordonneesSection** | Custom |

### Composants Réutilisables

| Composant | Source | Utilisé par |
|-----------|--------|-------------|
| **SectionSupertitle** | Custom | Toutes les sections (×20+) |
| **ImagePlaceholder** | Custom | Toutes les sections avec images (×15+) |
| **AnimatedHeading** | Custom | Hero, H2 de toutes les sections (×15+) |
| **ScrollReveal** | Custom-wrapper IntersectionObserver + framer-motion | Wrapper générique : images, paragraphes, cards |
| **CTAPrimary** | Custom | Hero, CTA sections (×4) |
| **CTASecondary** | Custom | Hero, Biographie, Témoignages (×3) |
| **StatBlock** | Custom | StatsSection (×4) |
| **MarqueeStrip** | Custom | Hero → Biographie transition (×1) |
| **TabSwitcher** | Custom | InterventionsGridSection (×1) |
| **TestimonialCard** | Custom | TemoignagesSection (×2) |
| **ServiceCard** | Custom | InterventionsGridSection, RelatedProceduresSection (×12) |
| **ProcedureStep** | Custom | PhilosophieSection, DeroulementSection (×7) |
| **PageHero** | Custom | Docteur, Procédure, Contact (×21 appels) |

---

## Plan d'Animation

| Animation | Bibliothèque | Approche | Complexité |
|-----------|-------------|----------|------------|
| Smooth scrolling (inertie) | locomotive-scroll | Instance globale, init/destroy sur changement de page. Wrapper `data-scroll-container` + `data-scroll-speed` pour parallax. | Medium |
| Custom cursor (dot + ring avec lerp) | Vanilla JS | `requestAnimationFrame` loop : dot suit instantanément `mousemove`, ring interpole avec lerp 0.1. État hover toggle via event delegation sur `a, button, [data-cursor-hover]`. Caché sur touch via `matchMedia('(hover:hover)')`. | Medium |
| Hero H1 — ligne par ligne | framer-motion | Chaque ligne wrappée dans `overflow:hidden`. Variants `staggerChildren: 0.12`, `transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }`. Déclenché au mount (`initial/animate`, pas de scroll trigger). | Medium |
| AnimatedHeading (scroll) | framer-motion + IntersectionObserver | `whileInView` avec `viewport={{ once: true, amount: 0.2 }}`. `staggerChildren` sur les lignes. Variants : `y: "110%" → 0`, `opacity: 0 → 1`, 900ms. | Medium |
| ScrollReveal (fade-up) | framer-motion | `whileInView` + `viewport={{ once: true, amount: 0.15 }}`. `y: 40 → 0`, `opacity: 0 → 1`, 700ms. Pour groupes : `staggerChildren: 0.08` sur parent. | Low |
| Parallax images | locomotive-scroll | Attribut `data-scroll-speed="-0.2"` sur conteneurs image. Locomotive gère le calcul. Pas d'implémentation manuelle. | Low |
| Marquee infini | CSS pur | `@keyframes translateX(0 → -50%)`, 28s linear infinite. Deux copies DOM identiques dans le track. Aucun JS. | Low |
| Compteurs stats | Vanilla JS | `requestAnimationFrame` loop, interpolation ease-out-expo manuelle. Déclenché par IntersectionObserver une seule fois. Format : "13", "21+", "2", "SOFCPRE". | Medium |
| Page transitions | framer-motion | `AnimatePresence` dans le routeur. Exit : `opacity: 1 → 0`, 300ms. Enter : `opacity: 0 → 1`, `y: 20 → 0`, 500ms. | Medium |
| Tab switcher | framer-motion | `AnimatePresence` + `mode="wait"`. Exit : `opacity → 0`, 200ms. Enter : `opacity → 1`, `y: 10 → 0`, 300ms. Indicator underline : `layoutId` pour le slide. | Medium |
| Navigation scroll-aware | Vanilla JS | Scroll listener natif (ou event Locomotive) : au-delà de 80px, toggle classe CSS pour background blur + shadow. Désactive le listener pendant les transitions de page. | Low |
| Dropdown menus | CSS pur | `opacity + translateY(-8px) → 0`, `pointer-events`, 200ms. Desktop : hover via CSS (`:hover` parent). Mobile : toggle classe JS au click. | Low |
| Mobile menu | framer-motion | Overlay `AnimatePresence`. Items : `staggerChildren: 0.08`, `y: 30 → 0`, `opacity: 0 → 1`. Hamburger → X via rotation CSS. | Medium |
| Scroll indicator (hero) | CSS pur | `scaleY(0 → 1)` loop, 2s, `transform-origin: top`. Disparition au scroll via classe JS. | Low |
| Split section entrées | framer-motion | Left : `x: -30 → 0`, `opacity: 0 → 1`. Right : `x: 30 → 0`, même timing. 900ms. | Low |
| Témoignage cards | framer-motion | `whileInView`, `staggerChildren: 0.12`, fade-up 700ms. | Low |
| Candidats criteria stagger | framer-motion | `whileInView`, `staggerChildren: 0.08`, `x: -20 → 0`, 600ms. | Low |
| Form field stagger | framer-motion | `whileInView`, `staggerChildren: 0.06`, fade-up 500ms. | Low |
| Hero sous-titre + CTA (délai) | framer-motion | Même variant que hero H1 mais avec `delay: 0.4` après le dernier élément H1. | Low |

---

## State et Logique — Décisions Architecturales

### Locomotive Scroll + React Router : cycle de vie

Locomotive Scroll v5 nécessite un élément DOM wrapper (`[data-scroll-container]`). L'instance doit être détruite et recréée à chaque changement de page pour que le calcul des hauteurs et des positions soit correct. Cela implique :

- `PageLayout` gère l'instance LS dans un `useEffect` qui se déclenche sur `location.pathname`. Destroy → create → update sur chaque transition.
- L'instance est exposée via un `React.Context` pour que `NavigationHeader` (scroll detection) et les sections parallax y accèdent.
- `framer-motion` `AnimatePresence` sur les routes doit attendre la fin de l'animation exit avant de signaler à `PageLayout` de recréer LS. Utiliser `onExitComplete`.

### Routing pour les 19 pages de procédures

Une seule route dynamique `/chirurgie/:slug` avec un composant `ProcedurePage` qui :
1. Lit `slug` depuis `useParams()`
2. Importe le module de contenu correspondant (données : titre, description, étapes, critères, interventions connexes)
3. Passe les données aux 6 sections du template
4. Si `slug` n'existe pas → redirect `/`

Données des 19 procédures dans un fichier `proceduresData.ts` — tableau d'objets, pas de backend.

### Navigation multi-niveaux (dropdowns)

La nav comporte 2 dropdowns ("Chirurgie", "Esthétique") avec des sous-catégories. Sur desktop : ouverture au hover via CSS (`:hover` sur le conteneur parent — pas de JS). Sur mobile : les sous-catégories s'affichent comme des groupes repliables dans le menu plein écran, togglés au click. C'est un comportement dual sans état React complexe : le CSS gère le desktop, le state local du mobile menu gère le mobile.

### Custom cursor : Vanilla JS, pas React state

Le cursor est mis à jour à ~60fps via `requestAnimationFrame`. Placer ce système entièrement en dehors du cycle de rendu React : un composant `CustomCursor` qui attache ses listeners dans un `useEffect` et met à jour des refs DOM directement (pas de `setState`). État hover : event delegation sur `document` pour détecter `mouseenter/mouseleave` sur les éléments interactifs, toggle d'une classe CSS.

---

## Génération de fichiers HTML statiques

Le site est déployé comme **pages statiques séparées** (pas de SPA côté serveur). Post-build, un script Node.js lit la config de routes React Router et génère un fichier `.html` par route via un rendu React prerender. Chaque fichier charge le bundle JS/React qui hydrate ensuite pour le routing client-side. Ainsi le site fonctionne comme un MPA avec navigation réelle entre fichiers HTML, tout en bénéficiant du routing client-side après hydration.

**Routes à générer :**
- `/` → `index.html`
- `/docteur` → `docteur/index.html`
- `/contact` → `contact/index.html`
- `/chirurgie/:slug` → 19 fichiers HTML (un par procédure)
