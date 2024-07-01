import Image from "next/image";
import React from "react";
import { ImagePreview, Product, Size } from "@/interfaces/ProductMiniCard";

const ProductMiniCard = ({
  data,
}: {
  data: { imagesPreview: ImagePreview[]; product: Product };
}) => {
  const { imagesPreview, product } = data;
  const [currentImage, setCurrentImage] = React.useState(0);
  const [currentSize, setCurrentSize] = React.useState(0);
  return (
    <div className="flex flex-wrap gap-10">
      <div className="flex gap-x-4">
        <div className="space-y-8">
          {imagesPreview.map((item, index) => {
            return (
              <button
                className="block"
                key={item.src}
                onClick={() => setCurrentImage(index)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  className={`h-32 object-cover rounded-lg ${
                    index === currentImage
                      ? "transition-all duration-200 ease-in-out border-4 border-blue-500"
                      : ""
                  }`}
                  width={100}
                  height={100}
                  quality={100}
                />
              </button>
            );
          })}
        </div>
        <Image
          src={imagesPreview[currentImage].src}
          alt="alt"
          className="h-[452px] w-[250px] md:w-[400px] object-cover rounded-lg"
          width={400}
          height={452}
          quality={100}
        />
      </div>
      <div className="font-sans md:py-6 max-w-[450px]">
        <p className="text-sky-700 text-sm font-semibold mb-2 line-clamp-1">
          {product.label}
        </p>
        <h2 className="text-xl md:text-2xl lg:text-4xl text-slate-900 font-bold mb-4 line-clamp-2">
          {product.title}
        </h2>
        <p className="text-slate-700 text-sm mb-4 line-clamp-2">{product.description}</p>
        <p className="text-slate-900 font-bold text-xl md:text-2xl lg:text-4xl mb-2">
          {product.price}{" "}
          <span className="text-sky-700 text-sm align-middle bg-sky-200 p-2 inline-block rounded-lg">
            -{product.discount}
          </span>
        </p>
        <p className="text-slate-500 line-through mb-4">
          {product.originalPrice}
        </p>
        <p className="text-slate-900 font-semibold uppercase mb-4">
          Choose size
        </p>
        <ul className="flex flex-wrap gap-4 mb-8">
          {product.sizes.map((item, index) => {
            return (
              <li
                className={`border border-slate-800 rounded-sm px-2.5 py-1.5 w-10 text-center cursor-pointer ${
                  currentSize === index ? "bg-slate-800 text-slate-100" : ""
                }`}
                key={item}
                onClick={() => setCurrentSize(index)}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <div className="flex flex-wrap gap-6">
          <button
            className="flex-1 py-2.5 bg-sky-600 text-slate-100 rounded-lg"
            onClick={product.buyNow.buyNowCta}
          >
            {product.buyNow.ctaText}
          </button>
          <button
            className="flex-1 py-2.5 bg-pink-600 text-slate-100 rounded-lg"
            onClick={product.addToCard.addToCartCta}
          >
            {product.addToCard.ctaText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductMiniCard;
