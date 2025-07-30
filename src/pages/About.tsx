import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

export const About: React.FC = () => {
  const { theme, isAnimating } = useTheme();

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
        return `${base} bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100`;
    }
  };

  return (
    <div className={getPageClass()}>
      {theme === "theme2" && (
        <aside className="w-64 bg-gray-800 border-r border-gray-700 p-6">
          <h3 className="text-xl font-bold text-white mb-6 font-serif">
            About Menu
          </h3>
          <nav className="space-y-4">
            <a
              href="#mission"
              className="block text-amber-400 hover:text-white transition-colors"
            >
              Our Mission
            </a>
            <a
              href="#team"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Team
            </a>
            <a
              href="#values"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Values
            </a>
          </nav>
        </aside>
      )}

      <main
        className={
          theme === "theme2"
            ? "flex-1 p-8"
            : "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        }
      >
        <h1
          className={`text-4xl font-bold mb-8
          ${theme === "theme1" ? "text-gray-900 text-center" : ""}
          ${
            theme === "theme2"
              ? "text-white font-serif border-b-2 border-amber-500 pb-4"
              : ""
          }
          ${
            theme === "theme3"
              ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center"
              : ""
          }
        `}
          style={theme === "theme3" ? { fontFamily: "Pacifico, cursive" } : {}}
        >
          About HipsterApp
        </h1>

        <div
          className={`prose max-w-none
          ${theme === "theme1" ? "prose-gray" : ""}
          ${theme === "theme2" ? "prose-invert" : ""}
          ${theme === "theme3" ? "prose-purple" : ""}
        `}
        >
          <p
            className={`text-lg leading-relaxed mb-6
            ${theme === "theme1" ? "text-gray-600" : ""}
            ${theme === "theme2" ? "text-gray-300 font-serif" : ""}
            ${theme === "theme3" ? "text-purple-700" : ""}
          `}
          >
            HipsterApp represents the future of adaptive user interfaces. We
            believe that great design isn't just about looking good—it's about
            creating experiences that resonate with different users in different
            contexts.
          </p>

          <h2
            className={`text-2xl font-bold mb-4 mt-8
            ${theme === "theme1" ? "text-gray-900" : ""}
            ${theme === "theme2" ? "text-amber-400 font-serif" : ""}
            ${theme === "theme3" ? "text-purple-800" : ""}
          `}
            id="mission"
          >
            Our Mission
          </h2>

          <p
            className={`mb-6
            ${theme === "theme1" ? "text-gray-600" : ""}
            ${theme === "theme2" ? "text-gray-300 font-serif" : ""}
            ${theme === "theme3" ? "text-purple-700" : ""}
          `}
          >
            To demonstrate that user interface design can be both functional and
            expressive, adapting not just to user preferences but to different
            use cases and emotional contexts.
          </p>

          <ul
            className={`list-disc list-inside space-y-2 mb-8
            ${theme === "theme1" ? "text-gray-600" : ""}
            ${theme === "theme2" ? "text-gray-300 font-serif" : ""}
            ${theme === "theme3" ? "text-purple-700" : ""}
          `}
          >
            <li>Innovative multi-theme architecture</li>
            <li>Responsive design across all devices</li>
            <li>Performance-optimized React components</li>
            <li>Accessibility-first development</li>
            <li>Modern TypeScript implementation</li>
          </ul>
        </div>
      </main>
    </div>
  );
};
