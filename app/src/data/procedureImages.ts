// Curated medical-aesthetic images matched to each procedure
// All from Unsplash – procedure-appropriate, no random photos
export const procedureImages: Record<string, string> = {

  // ── Chirurgie du Corps ────────────────────────────────────────
  'prothese-mammaire':
    'https://images.unsplash.com/photo-1666214280391-8ff5bd3d9bf4?w=900&q=85',   // woman consultation
  'reduction-mammaire':
    'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&q=85',       // face/body consult
  'remonter-seins':
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=85',   // medical measurement
  'liposuccion':
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=85',   // medical clinic
  'gynecomastie':
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=85',   // medical/bandage
  'abdominoplastie':
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=85',      // abdomen/body
  'silhouette-lift':
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900&q=85',   // skin/face lift
  'reconstruction-plastique':
    'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=900&q=85',      // OR / surgery

  // ── Chirurgie du Visage ───────────────────────────────────────
  'rhinoplastie':
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&q=85',   // face profile close-up
  'oreille-decollees':
    'https://images.unsplash.com/photo-1491349174775-aaaefdd27a97?w=900&q=85',   // ear/side face
  'lifting':
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85',   // facial treatment
  'lifting-cervico-facial':
    'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=85',   // face/neck
  'blepharoplastie':
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=85',   // eye close-up woman

  // ── Médecine Esthétique ───────────────────────────────────────
  'greffe-capilaire':
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=85',   // hair / scalp
  'botox':
    'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=85',   // syringe / facial injection
  'acide-hyaluronique':
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=85',   // facial filler
  'peeling':
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=85',   // chemical peel skin
  'cerne':
    'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=900&q=85',   // eye dark circles
  'microdermabrasion':
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85',   // skin treatment device
  'apres-chirurgie':
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=85',   // post-op care
  'grossesse':
    'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=900&q=85',   // maternity/body care
};

export const fallbackImage =
  'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&q=85';

export const getProcedureImage = (slug: string): string =>
  procedureImages[slug] ?? fallbackImage;
