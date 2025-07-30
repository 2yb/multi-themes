import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "../components/ProductCard";
import { LoadingSpinner } from "../components/LoadingSpinner";

export const Home: React.FC = () => {
  const { theme, isAnimating } = useTheme();
  const { products, loading, error } = useProducts();

  const getPageClass = () => {
    const base = `min-h-screen pt-16 transition-all duration-500 ease-in-out ${
      isAnimating ? "opacity-0" : "opacity-100"
    }`;
    switch (theme) {
      case "theme1":
        return `${base} bg-gray-50`;
      case "theme2":
        return `${base} bg-gray-900 flex`;
      case "theme3":
        return `${base} bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100`;
    }
  };

  const getSidebarClass = () => {
    if (theme !== "theme2") return "";
    return "w-64 bg-gray-800 border-r border-gray-700 p-6 flex-shrink-0";
  };

  const getMainClass = () => {
    switch (theme) {
      case "theme1":
        return "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12";
      case "theme2":
        return "flex-1 p-8";
      case "theme3":
        return "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12";
    }
  };

  const getTitleClass = () => {
    switch (theme) {
      case "theme1":
        return "text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center";
      case "theme2":
        return "text-5xl font-bold text-white mb-8 font-serif border-b-2 border-amber-500 pb-4";
      case "theme3":
        return "text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8 text-center";
    }
  };

  const getDescriptionClass = () => {
    switch (theme) {
      case "theme1":
        return "text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto leading-relaxed";
      case "theme2":
        return "text-xl text-gray-300 mb-12 font-serif leading-relaxed";
      case "theme3":
        return "text-lg text-purple-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed";
    }
  };

  const getGridClass = () => {
    switch (theme) {
      case "theme1":
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
      case "theme2":
        return "space-y-8";
      case "theme3":
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8";
    }
  };

  return (
    <div className={getPageClass()}>
      {theme === "theme2" && (
        <aside className={getSidebarClass()}>
          <h3 className="text-xl font-bold text-white mb-6 font-serif">
            Navigation
          </h3>
          <nav className="space-y-4">
            <Link
              to="/"
              className="block text-amber-400 hover:text-white transition-colors"
            >
              🏠 Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              ℹ️ About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              📧 Contact
            </Link>
          </nav>
          <div className="mt-8 p-4 bg-gray-700 rounded">
            <h4 className="text-amber-400 font-serif mb-2">Featured</h4>
            <p className="text-gray-300 text-sm">
              Discover amazing products from our curated collection.
            </p>
          </div>
        </aside>
      )}

      <main className={getMainClass()}>
        <h1
          className={getTitleClass()}
          style={theme === "theme3" ? { fontFamily: "Pacifico, cursive" } : {}}
        >
          Welcome to HipsterApp
        </h1>

        <p className={getDescriptionClass()}>
          Experience our revolutionary multi-theme interface that adapts not
          just colors, but complete layouts, typography, and user experience
          patterns. Each theme tells a different story.
        </p>

        <div className={`mb-8 ${theme === "theme1" ? "text-center" : ""}`}>
          <button
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105
            ${
              theme === "theme1"
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                : ""
            }
            ${
              theme === "theme2"
                ? "bg-amber-500 hover:bg-amber-600 text-black font-serif"
                : ""
            }
            ${
              theme === "theme3"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-xl"
                : ""
            }
          `}
          >
            Explore Products
          </button>
        </div>

        <section>
          <h2
            className={`text-2xl font-bold mb-8
            ${theme === "theme1" ? "text-gray-900" : ""}
            ${theme === "theme2" ? "text-white font-serif" : ""}
            ${theme === "theme3" ? "text-purple-800" : ""}
          `}
            style={
              theme === "theme3" ? { fontFamily: "Pacifico, cursive" } : {}
            }
          >
            Featured Products
          </h2>

          {loading && <LoadingSpinner />}
          {error && (
            <div className="text-center py-8 text-red-500">
              <p>Error loading products: {error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className={getGridClass()}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
