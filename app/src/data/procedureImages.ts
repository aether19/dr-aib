// ─── Procedure Images ─────────────────────────────────────────────────────────
// Chirurgie du Corps: uploaded by Dr. Aib Amar (Builder.io CDN)
// Chirurgie du Visage + Médecine Esthétique: Shafer PS / ASPS clinic sites

const CDN = 'https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009';

export const procedureImages: Record<string, string> = {

  // ── Chirurgie du Corps — uploaded images (in order) ──────────────────────
  'prothese-mammaire':
    `${CDN}%2Fb9c2e230a415411d921d87c3e728d47c?format=webp&width=800`,
  'reduction-mammaire':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2F1dac38ab05a24833a3f6dbdb076c61d6?format=webp&width=800`,
  'remonter-seins':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2F3399acbea15645c1bb5f79e4b8da317e?format=webp&width=800`,
  'gynecomastie':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2Fcc59a2a1a1824a7e9000df3e0a329ece?format=webp&width=800`,
  'liposuccion':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2F1d7e16bb1e0d4314b79c77534f7280db?format=webp&width=800`,
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
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2F2cad5b791f6a41c48618fc7401999b24?format=webp&width=800`,

  // ── Médecine Esthétique — real clinic photos ─────────────────────────────
  'greffe-capilaire':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2F51f459d37a86414e82cf6b49337ed468?format=webp&width=800`,
  'botox':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2F20e8515b3ab0473893d770805a4625a2?format=webp&width=800`,
  'acide-hyaluronique':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2Fdb0405ab45f940f1875f5774f4153d2f?format=webp&width=800`,
  'peeling':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2Fdb890ffad84f4c2aaadaae0bf59033e9?format=webp&width=800`,
  'cerne':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2F6963fea3f81f4f6e9a202e99464aa043?format=webp&width=800`,
  'microdermabrasion':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2F31fd75726f0742e9a2de0d68011bea47?format=webp&width=800`,
  'apres-chirurgie':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2F71e7d573ca544d84b7c62a5ff4732a96?format=webp&width=800`,
  'grossesse':
    `https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2F9adbbcbbd21240e4b8cc5afbf43e9668?format=webp&width=800`,
};

// ── Section / hero images (NOT procedure-specific — keep as-is) ───────────
export const HERO_IMAGE    = 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=90&auto=format&fit=crop';
export const OR_IMAGE      = 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=900&q=90&auto=format&fit=crop';
export const CONSULT_IMAGE = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=90&auto=format&fit=crop';
export const CLINIC_IMAGE  = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=90&auto=format&fit=crop';

export const fallbackImage = HERO_IMAGE;

export const getProcedureImage = (slug: string): string =>
  procedureImages[slug] ?? fallbackImage;
