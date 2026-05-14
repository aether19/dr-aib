export const procedureImages: Record<string, string> = {
  // Corps
  'prothese-mammaire':       'https://images.unsplash.com/photo-1576765974256-41b17d2a1f72?w=900&q=85',
  'reduction-mammaire':      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=85',
  'remonter-seins':          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=85',
  'liposuccion':             'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=85',
  'gynecomastie':            'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=85',
  'abdominoplastie':         'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=85',
  'silhouette-lift':         'https://images.unsplash.com/photo-1520810627419-35e6bae96049?w=900&q=85',
  'reconstruction-plastique':'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=900&q=85',
  // Visage
  'rhinoplastie':            'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900&q=85',
  'oreille-decollees':       'https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?w=900&q=85',
  'lifting':                 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&q=85',
  'lifting-cervico-facial':  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=85',
  'blepharoplastie':         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=85',
  // Esthétique
  'greffe-capilaire':        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=85',
  'botox':                   'https://images.unsplash.com/photo-1601158935942-52255782d322?w=900&q=85',
  'acide-hyaluronique':      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=85',
  'peeling':                 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900&q=85',
  'cerne':                   'https://images.unsplash.com/photo-1491349174775-aaaefdd27a97?w=900&q=85',
  'microdermabrasion':       'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85',
  'apres-chirurgie':         'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=85',
  'grossesse':               'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=900&q=85',
};

export const fallbackImage = 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&q=85';

export const getProcedureImage = (slug: string): string =>
  procedureImages[slug] ?? fallbackImage;
