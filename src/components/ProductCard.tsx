import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { theme } = useTheme();

  const getCardClass = () => {
    const base =
      "group relative overflow-hidden transition-all duration-500 hover:scale-105";
    switch (theme) {
      case "theme1":
        return `${base} bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-xl p-6`;
      case "theme2":
        return `${base} bg-gray-800 rounded-none border-l-4 border-amber-500 p-8 hover:bg-gray-750 hover:border-amber-400`;
      case "theme3":
        return `${base} bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg hover:shadow-2xl p-6 border-2 border-purple-200`;
    }
  };

  const getTitleClass = () => {
    switch (theme) {
      case "theme1":
        return "text-lg font-semibold text-gray-900 mb-2 line-clamp-2";
      case "theme2":
        return "text-xl font-bold text-white mb-3 font-serif line-clamp-2";
      case "theme3":
        return "text-lg font-bold text-purple-800 mb-2 line-clamp-2";
    }
  };

  const getPriceClass = () => {
    switch (theme) {
      case "theme1":
        return "text-2xl font-bold text-blue-600";
      case "theme2":
        return "text-2xl font-bold text-amber-400 font-serif";
      case "theme3":
        return "text-2xl font-bold text-pink-600";
    }
  };

  return (
    <div className={getCardClass()}>
      <div className="aspect-square mb-4 overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <h3 className={getTitleClass()}>{product.title}</h3>
      <p
        className={`text-sm mb-4 line-clamp-3
        ${theme === "theme1" ? "text-gray-600" : ""}
        ${theme === "theme2" ? "text-gray-300" : ""}
        ${theme === "theme3" ? "text-purple-600" : ""}
      `}
      >
        {product.description}
      </p>
      <div className="flex justify-between items-center">
        <span className={getPriceClass()}>${product.price}</span>
        <div
          className={`flex items-center space-x-1
          ${theme === "theme1" ? "text-yellow-500" : ""}
          ${theme === "theme2" ? "text-amber-400" : ""}
          ${theme === "theme3" ? "text-orange-500" : ""}
        `}
        >
          <span>★</span>
          <span className="text-sm">{product.rating.rate}</span>
        </div>
      </div>
    </div>
  );
};
