// All images from Pexels — free, no attribution required
// Selected to match each medical procedure contextually

const PX = (id: number, w = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const procedureImages: Record<string, string> = {

  // ── Chirurgie du Corps ─────────────────────────────────────────────────────
  // Breast / mammary procedures — clinic consultation imagery
  'prothese-mammaire':       PX(5215024),  // aesthetic clinic interior
  'reduction-mammaire':      PX(3376790),  // modern medical office
  'remonter-seins':          PX(4386466),  // medical consultation
  // Body contouring
  'liposuccion':             PX(3985163),  // body medical measurement
  'gynecomastie':            PX(6303573),  // clinical examination
  'abdominoplastie':         PX(4498362),  // abdomen medical
  'silhouette-lift':         PX(5765872),  // surgical/medical
  'reconstruction-plastique':PX(3825538),  // operating room

  // ── Chirurgie du Visage ────────────────────────────────────────────────────
  // Nose
  'rhinoplastie':            PX(2613260),  // woman profile face
  // Ears
  'oreille-decollees':       PX(3762875),  // face/ear side view
  // Face lift procedures
  'lifting':                 PX(3764119),  // elegant woman face
  'lifting-cervico-facial':  PX(5938321),  // facial medical procedure
  // Eyes
  'blepharoplastie':         PX(1382731),  // eye close-up woman

  // ── Médecine Esthétique ────────────────────────────────────────────────────
  // Hair
  'greffe-capilaire':        PX(3771115),  // hair treatment scalp
  // Injections
  'botox':                   PX(5938267),  // face injection medical
  'acide-hyaluronique':      PX(6998458),  // lip/face filler
  // Skin treatments
  'peeling':                 PX(3997993),  // chemical peel / skin care
  'cerne':                   PX(3812854),  // under-eye area
  'microdermabrasion':       PX(6045028),  // skin treatment device
  // Post-care
  'apres-chirurgie':         PX(4386466),  // medical follow-up consultation
  'grossesse':               PX(1153940),  // maternity / body care
};

export const fallbackImage = PX(3376790, 1920);

export const getProcedureImage = (slug: string): string =>
  procedureImages[slug] ?? fallbackImage;

// Hero / section images (not Unsplash)
export const HERO_IMAGE     = PX(5215024, 1920); // premium aesthetic clinic
export const CLINIC_IMAGE   = PX(3376790, 1920); // clinic interior
export const OR_IMAGE       = PX(3825538, 900);  // operating room
export const CONSULT_IMAGE  = PX(4386466, 900);  // consultation room
