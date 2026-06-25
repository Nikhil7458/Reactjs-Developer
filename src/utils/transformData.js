export const transformLandingData = (products) => {
  const hero = products[0];
  const pricing = products[1];
  const offer = products[2];

  return {
    navbar: {
      offerOldPrice: Math.round(offer.price * 2200),
      offerPrice: Math.round(offer.price * 1500),
    },

    hero: {
      title: hero.title,
      subtitle: hero.description,
    },

    pricing: {
      title: pricing.title,

      oldPrice: Math.round(pricing.price * 1800),

      currentPrice: Math.round(pricing.price * 1100),

      features: [
        "Offer valid for a limited time",
        "Easy financing options",
      ],
    },
  };
};