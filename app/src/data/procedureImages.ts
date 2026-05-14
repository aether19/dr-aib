// ─── Procedure Images ─────────────────────────────────────────────────────────
// Real photos sourced from actual plastic surgery clinic websites:
//   • Shafer Plastic Surgery (shaferplasticsurgery.com) — NYC reference clinic
//   • American Society of Plastic Surgeons (plasticsurgery.org)
// All URLs verified 200 OK.

const SHAFER = 'https://www.shaferplasticsurgery.com/wp-content/uploads/2025/07';
const ASPS   = 'https://www.plasticsurgery.org/images/Procedures';

export const procedureImages: Record<string, string> = {

  // ── Chirurgie du Corps ───────────────────────────────────────────────────
  'prothese-mammaire':
    `${SHAFER}/1730748192-breast-augmentation-banner.jpg`,
  'reduction-mammaire':
    `${ASPS}/Breast-Reduction/breast-reduction.jpg`,
  'remonter-seins':
    `${ASPS}/Breast-Lift/breast-lift.jpg`,
  'liposuccion':
    `${ASPS}/Liposuction/liposuction.jpg`,
  'gynecomastie':
    `${SHAFER}/1732550999-b559e5dc-f03e-47f5-84e2-18ba8a5e8a1a.png`,
  'abdominoplastie':
    `${ASPS}/Tummy-Tuck/tummy-tuck.jpg`,
  'silhouette-lift':
    `${SHAFER}/1733336933-renuvion-skin-tightening-banner-1.jpg`,
  'reconstruction-plastique':
    `${SHAFER}/1730157143-before-after-bgd-1-scaled.jpg`,

  // ── Chirurgie du Visage ──────────────────────────────────────────────────
  'rhinoplastie':
    `${SHAFER}/1732551071-85719aa8-7cdd-473c-9c14-76102afd5838.png`,
  'oreille-decollees':
    `${SHAFER}/1729197077-facelift-bf4b.jpeg`,
  'lifting':
    `${ASPS}/Facelift/facelift.jpg`,
  'lifting-cervico-facial':
    `${ASPS}/Neck-Lift/neck-lift.jpg`,
  'blepharoplastie':
    `${ASPS}/Eyelid-Surgery/eyelid-surgery.jpg`,

  // ── Médecine Esthétique ──────────────────────────────────────────────────
  'greffe-capilaire':
    `${SHAFER}/1732571595-d9e15c36-5f99-40dd-80e9-190051f8e13e.png`,
  'botox':
    `${SHAFER}/1729197255-botox-0518.jpeg`,
  'acide-hyaluronique':
    `${SHAFER}/1733328102-lip-lift-banner.jpg`,
  'peeling':
    `${SHAFER}/1734378113-edyta-half-image.jpg`,
  'cerne':
    `${ASPS}/Eyelid-Surgery/eyelid-surgery.jpg`,
  'microdermabrasion':
    `${SHAFER}/1732551010-f957de1b-1e23-4feb-a548-95690ab29882.png`,
  'apres-chirurgie':
    `${SHAFER}/1730232881-sub-cta-scaled.jpg`,
  'grossesse':
    `${ASPS}/Tummy-Tuck/tummy-tuck.jpg`,
};

// ── Section / hero images (NOT procedure-specific — keep as-is) ───────────
export const HERO_IMAGE    = 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=90&auto=format&fit=crop';
export const OR_IMAGE      = 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=900&q=90&auto=format&fit=crop';
export const CONSULT_IMAGE = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=90&auto=format&fit=crop';
export const CLINIC_IMAGE  = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=90&auto=format&fit=crop';

export const fallbackImage = HERO_IMAGE;

export const getProcedureImage = (slug: string): string =>
  procedureImages[slug] ?? fallbackImage;
