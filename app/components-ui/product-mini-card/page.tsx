"use client";

import { ImagePreview, Product, Size } from "@/interfaces/ProductMiniCard";
import ProductMiniCard from "@/app/components/ProductMiniCard";

const data: {
  imagesPreview: ImagePreview[];
  product: Product;
} = {
  imagesPreview: [
    {
      id: 1,
      src: "https://images.stockcake.com/public/d/f/9/df932a7a-e484-4754-833e-b1ca20cc7633_large/confident-elegant-woman-stockcake.jpg",
      alt: "Woman in black tshirt",
    },
    {
      id: 2,
      src: "https://images.stockcake.com/public/4/5/6/45665d06-5fc1-4825-a8db-a313cb2d5029_large/black-t-shirt-display-stockcake.jpg",
      alt: "black tshirt",
    },
    {
      id: 3,
      src: "https://images.stockcake.com/public/c/4/2/c42f2fae-60a0-4d2b-8104-fba48aa5d0f2_large/black-t-shirt-display-stockcake.jpg",
      alt: "black tshirt",
    },
  ],
  product: {
    label: "Polo Phantom",
    title: "Custom fit Polo Phantom tshirt",
    description: "Black polo half sleeves tshirt in smooth and soft cotton.",
    price: "$99.00",
    discount: "25%",
    originalPrice: "$132",
    sizes: ["xs", "s", "m", "l", "xl", "xxl"] as Size[],
    buyNow: {
      buyNowCta: () => console.log("Buy Now"),
      ctaText: "Buy Now",
    },
    addToCard: {
      addToCartCta: () => console.log("Add to cart"),
      ctaText: "Add to cart",
    },
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-14 lg:p-24">
      <ProductMiniCard data={data} />
    </main>
  );
}
