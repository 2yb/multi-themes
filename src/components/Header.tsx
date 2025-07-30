import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

export const Header: React.FC = () => {
  const { theme, setTheme, isAnimating } = useTheme();
  const location = useLocation();

  const getHeaderClass = () => {
    const base =
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out";
    switch (theme) {
      case "theme1":
        return `${base} bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm`;
      case "theme2":
        return `${base} bg-gray-900/95 backdrop-blur-md border-b border-gray-700`;
      case "theme3":
        return `${base} bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg`;
    }
  };

  const getNavClass = () => {
    switch (theme) {
      case "theme1":
        return "text-gray-700 hover:text-blue-600 transition-colors duration-300";
      case "theme2":
        return "text-gray-300 hover:text-white transition-colors duration-300";
      case "theme3":
        return "text-white hover:text-yellow-300 transition-colors duration-300";
    }
  };

  const getCurrentPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/about":
        return "About";
      case "/contact":
        return "Contact";
      default:
        return "Home";
    }
  };

  return (
    <header className={getHeaderClass()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg
                ${theme === "theme1" ? "bg-blue-600 text-white" : ""}
                ${theme === "theme2" ? "bg-amber-500 text-black" : ""}
                ${theme === "theme3" ? "bg-white text-purple-600" : ""}
              `}
              >
                H
              </div>
              <span
                className={`font-bold text-xl
                ${theme === "theme1" ? "text-gray-900" : ""}
                ${theme === "theme2" ? "text-white font-serif" : ""}
                ${theme === "theme3" ? "text-white" : ""}
              `}
                style={
                  theme === "theme3" ? { fontFamily: "Pacifico, cursive" } : {}
                }
              >
                HipsterApp
              </span>
            </Link>

            <nav className="hidden md:flex space-x-6">
              <Link to="/" className={getNavClass()}>
                Home
              </Link>
              <Link to="/about" className={getNavClass()}>
                About
              </Link>
              <Link to="/contact" className={getNavClass()}>
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <span
              className={`hidden sm:block text-sm
              ${theme === "theme1" ? "text-gray-600" : ""}
              ${theme === "theme2" ? "text-gray-400" : ""}
              ${theme === "theme3" ? "text-white/80" : ""}
            `}
            >
              {getCurrentPageTitle()} | Current Theme:{" "}
              {theme.replace("theme", "Theme ")}
            </span>

            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as any)}
              disabled={isAnimating}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 border
                ${
                  theme === "theme1"
                    ? "bg-white border-gray-300 text-gray-700 hover:border-blue-500"
                    : ""
                }
                ${
                  theme === "theme2"
                    ? "bg-gray-800 border-gray-600 text-white hover:border-amber-500"
                    : ""
                }
                ${
                  theme === "theme3"
                    ? "bg-white/20 border-white/30 text-white hover:bg-white/30"
                    : ""
                }
                ${
                  isAnimating
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }
              `}
            >
              <option value="theme1">Theme 1 - Minimal</option>
              <option value="theme2">Theme 2 - Dark Pro</option>
              <option value="theme3">Theme 3 - Colorful</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};
