// ─── Procedure Images ────────────────────────────────────────────────────────
// AI-generated via Pollinations.ai — each image is specifically prompted
// for the corresponding procedure or body area.

const AI = (prompt: string, seed: number, w = 800, h = 600) =>
  `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${w}&height=${h}&seed=${seed}&nologo=true`;

export const procedureImages: Record<string, string> = {

  // ── Chirurgie du Corps ────────────────────────────────────────────────────
  'prothese-mammaire':
    AI('professional aesthetic plastic surgery clinic breast augmentation consultation luxurious medical setting', 101),
  'reduction-mammaire':
    AI('breast reduction plastic surgery medical clinic professional consultation aesthetic', 102),
  'remonter-seins':
    AI('breast lift mastopexy aesthetic surgery medical clinic consultation professional', 103),
  'liposuccion':
    AI('liposuction body contouring plastic surgery aesthetic clinic medical professional consultation', 104),
  'gynecomastie':
    AI('gynecomastia male chest plastic surgery medical clinic professional consultation aesthetic', 105),
  'abdominoplastie':
    AI('tummy tuck abdominoplasty plastic surgery aesthetic clinic medical professional consultation', 106),
  'silhouette-lift':
    AI('body silhouette lift contouring aesthetic plastic surgery medical clinic professional', 107),
  'reconstruction-plastique':
    AI('reconstructive plastic surgery medical clinic professional operating room aesthetic', 108),

  // ── Chirurgie du Visage ───────────────────────────────────────────────────
  'rhinoplastie':
    AI('rhinoplasty nose cosmetic surgery aesthetic clinic beautiful side profile medical professional', 201),
  'oreille-decollees':
    AI('otoplasty ear surgery aesthetic medical clinic professional consultation', 202),
  'lifting':
    AI('facelift facial rejuvenation aesthetic plastic surgery clinic medical professional', 203),
  'lifting-cervico-facial':
    AI('cervicofacial neck facelift aesthetic surgery medical clinic professional consultation', 204),
  'blepharoplastie':
    AI('blepharoplasty eyelid surgery aesthetic medical clinic professional close up eye', 205),

  // ── Médecine Esthétique ───────────────────────────────────────────────────
  'greffe-capilaire':
    AI('hair transplant surgery medical clinic professional aesthetic scalp treatment', 301),
  'botox':
    AI('botox facial injection aesthetic medicine clinic medical professional treatment', 302),
  'acide-hyaluronique':
    AI('hyaluronic acid lip filler injection aesthetic clinic medical professional beautiful', 303),
  'peeling':
    AI('chemical peel skin rejuvenation treatment aesthetic clinic medical professional', 304),
  'cerne':
    AI('under eye dark circle treatment aesthetic medical clinic professional', 305),
  'microdermabrasion':
    AI('microdermabrasion skin resurfacing aesthetic clinic medical professional treatment', 306),
  'apres-chirurgie':
    AI('post surgery follow up consultation medical clinic doctor patient professional care', 307),
  'grossesse':
    AI('post pregnancy body care aesthetic clinic medical professional wellness consultation', 308),
};

// ── Section / hero images (NOT procedure-specific — keep as-is) ──────────────
export const HERO_IMAGE    = 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=90&auto=format&fit=crop';
export const OR_IMAGE      = 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=900&q=90&auto=format&fit=crop';
export const CONSULT_IMAGE = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=90&auto=format&fit=crop';
export const CLINIC_IMAGE  = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=90&auto=format&fit=crop';

export const fallbackImage = HERO_IMAGE;

export const getProcedureImage = (slug: string): string =>
  procedureImages[slug] ?? fallbackImage;
