// ─── Procedure Images ─────────────────────────────────────────────────────────
// Chirurgie du Corps: uploaded by Dr. Aib Amar (Builder.io CDN)
// Chirurgie du Visage + Médecine Esthétique: Shafer PS / ASPS clinic sites

const CDN = 'https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009';
const SHAFER = 'https://www.shaferplasticsurgery.com/wp-content/uploads/2025/07';
const ASPS   = 'https://www.plasticsurgery.org/images/Procedures';

export const procedureImages: Record<string, string> = {

  // ── Chirurgie du Corps — uploaded images (in order) ──────────────────────
  'prothese-mammaire':
    `${CDN}%2Fb9c2e230a415411d921d87c3e728d47c?format=webp&width=800`,
  'reduction-mammaire':
    `${CDN}%2F942f4dd731974a699b447e250fa02925?format=webp&width=800`,
  'remonter-seins':
    `${CDN}%2Fc7c2c8190fa94296950484ff137f3f8d?format=webp&width=800`,
  'gynecomastie':
    `${CDN}%2Fcfeb87c604af4e3a9dcb744413d86df9?format=webp&width=800`,
  'liposuccion':
    `${CDN}%2F83a3e3be172041328d7937fa05964aca?format=webp&width=800`,
  'abdominoplastie':
    `${CDN}%2F10576b8995544fc09e440372414bd8d9?format=webp&width=800`,
  'silhouette-lift':
    `${CDN}%2F8dc31a91d4404c83b37f364320ad3d43?format=webp&width=800`,
  'reconstruction-plastique':
    `${CDN}%2Fe8e270d04fb4437e8d5c5a8637058117?format=webp&width=800`,

  // ── Chirurgie du Visage — real clinic photos ─────────────────────────────
  'rhinoplastie':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2Fc6032703d9e74124be0a459df73d3863?format=webp&width=800`,
  'oreille-decollees':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2Fcc3a96426c0f4a40a37297873723609f?format=webp&width=800`,
  'lifting':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2F7162ad0220b84ae4a7ab1f3ae5f3b5c7?format=webp&width=800`,
  'lifting-cervico-facial':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2F4b209abcbea94ba6b361be0d2b3a5d8a?format=webp&width=800`,
  'blepharoplastie':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2Fcb00558421d54cf890ec77700e8e7335?format=webp&width=800`,

  // ── Médecine Esthétique — real clinic photos ─────────────────────────────
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
