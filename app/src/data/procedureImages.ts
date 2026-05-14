// ─── Procedure Images ────────────────────────────────────────────────────────
// Sourced from Unsplash medical/aesthetic collections
// Each image is matched to the specific procedure or body area

const U = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?w=${w}&q=90&auto=format&fit=crop`;

export const procedureImages: Record<string, string> = {

  // ── Chirurgie du Corps ────────────────────────────────────────────────────
  'prothese-mammaire':
    U('photo-1576091160399-112ba8d25d1d'),   // clinical medical consultation
  'reduction-mammaire':
    U('photo-1576091160550-2173dba999ef'),   // medical clinic setting
  'remonter-seins':
    U('photo-1551076805-e1869033e561'),      // medical procedure clinical
  'liposuccion':
    U('photo-1571019613454-1cb2f99b2d8b'),   // body measurement clinical
  'gynecomastie':
    U('photo-1612349317150-e413f6a5b16d'),   // medical examination upper body
  'abdominoplastie':
    U('photo-1559757148-5c350d0d3c56'),      // abdomen clinical
  'silhouette-lift':
    U('photo-1576091160399-112ba8d25d1d'),   // clinic/consultation
  'reconstruction-plastique':
    U('photo-1551601651-2a8555f1a136'),      // operating room (confirmed OR image)

  // ── Chirurgie du Visage ───────────────────────────────────────────────────
  'rhinoplastie':
    U('photo-1580489944761-15a19d654956'),   // woman face/profile beauty
  'oreille-decollees':
    U('photo-1509967419530-da38b4704bc6'),   // face profile/skin close-up
  'lifting':
    U('photo-1559757175-5700dde675bc'),      // face anti-aging / skin care
  'lifting-cervico-facial':
    U('photo-1570172619644-dfd03ed5d881'),   // facial skin treatment close-up
  'blepharoplastie':
    U('photo-1494790108377-be9c29b29330'),   // woman eye area close-up

  // ── Médecine Esthétique ───────────────────────────────────────────────────
  'greffe-capilaire':
    U('photo-1522337360788-8b13dee7a37e'),   // hair treatment / scalp
  'botox':
    U('photo-1576091160550-2173dba999ef'),   // medical aesthetic / clinic
  'acide-hyaluronique':
    U('photo-1515377905703-c4788e51af15'),   // skin / face care product
  'peeling':
    U('photo-1570172619644-dfd03ed5d881'),   // facial skin treatment
  'cerne':
    U('photo-1494790108377-be9c29b29330'),   // eye / under-eye area
  'microdermabrasion':
    U('photo-1515377905703-c4788e51af15'),   // skin treatment / care
  'apres-chirurgie':
    U('photo-1579684385127-1ef15d508118'),   // medical follow-up
  'grossesse':
    U('photo-1476703993599-0035a21b17a9'),   // maternity / body care
};

// Section/hero images (not procedure-specific)
export const HERO_IMAGE    = 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=90&auto=format&fit=crop';
export const OR_IMAGE      = 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=900&q=90&auto=format&fit=crop';
export const CONSULT_IMAGE = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=90&auto=format&fit=crop';
export const CLINIC_IMAGE  = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=90&auto=format&fit=crop';

export const fallbackImage = HERO_IMAGE;

export const getProcedureImage = (slug: string): string =>
  procedureImages[slug] ?? fallbackImage;
