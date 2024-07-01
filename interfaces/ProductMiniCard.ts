export type ImagePreview = {
  id: number;
  src: string;
  alt: string;
};

export type Size = "xs" | "s" | "m" | "l" | "xl" | "xxl";

export type Product = {
  label: string;
  title: string;
  description: string;
  price: string;
  discount: string;
  originalPrice: string;
  sizes: Size[];
  buyNow: {
    buyNowCta: () => void;
    ctaText: string;
  };
  addToCard: {
    addToCartCta: () => void;
    ctaText: string;
  };
};
