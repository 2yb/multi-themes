import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "../components/ProductCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { LoginModal } from "../components/LoginModal";

interface User {
  email: string;
  password: string;
  role: string;
}

export const Home: React.FC = () => {
  const { theme, isAnimating } = useTheme();
  const { products, loading, error } = useProducts();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Check if user is already logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setIsLoggedIn(true);
      setCurrentUser(user);
    }
  }, []);

  const handleLogin = (user: User) => {
    setIsLoggedIn(true);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const handleExploreClick = () => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
    } else {
      // Scroll to products section or navigate somewhere
      document.getElementById("products-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

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

          {/* User Status in Sidebar */}
          <div className="mt-8 p-4 bg-gray-700 rounded">
            {isLoggedIn ? (
              <div>
                <h4 className="text-amber-400 font-serif mb-2">Welcome!</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Logged in as:{" "}
                  <span className="text-amber-400">{currentUser?.role}</span>
                </p>
                <button
                  onClick={handleLogout}
                  className="text-xs text-gray-400 hover:text-white underline"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <h4 className="text-amber-400 font-serif mb-2">Featured</h4>
                <p className="text-gray-300 text-sm">
                  Discover amazing products from our curated collection.
                </p>
              </div>
            )}
          </div>
        </aside>
      )}

      <main className={getMainClass()}>
        {/* User Status Bar for theme1 and theme3 */}
        {theme !== "theme2" && isLoggedIn && (
          <div
            className={`mb-4 p-3 rounded-lg text-center ${
              theme === "theme1"
                ? "bg-green-100 text-green-800"
                : "bg-purple-100 text-purple-800"
            }`}
          >
            Welcome back! You're logged in as{" "}
            <span className="font-semibold">{currentUser?.role}</span>
            <button
              onClick={handleLogout}
              className="ml-3 text-sm underline hover:no-underline"
            >
              Logout
            </button>
          </div>
        )}

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
            onClick={handleExploreClick}
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
            {isLoggedIn ? "Explore Products" : "Login to Explore"}
          </button>
        </div>

        <section id="products-section">
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

          {!isLoggedIn ? (
            <div
              className={`text-center py-12 ${
                theme === "theme1"
                  ? "text-gray-600"
                  : theme === "theme2"
                  ? "text-gray-300"
                  : "text-purple-600"
              }`}
            >
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Login Required</h3>
              <p className="mb-4">Please log in to view our amazing products</p>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  theme === "theme1"
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : theme === "theme2"
                    ? "bg-amber-500 hover:bg-amber-600 text-black"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
              >
                Login Now
              </button>
            </div>
          ) : (
            <>
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
            </>
          )}
        </section>
      </main>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};
