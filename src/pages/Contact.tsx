import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

export const Contact: React.FC = () => {
  const { theme, isAnimating } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
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
        return `${base} bg-gradient-to-br from-green-100 via-blue-50 to-purple-100`;
    }
  };

  const getInputClass = () => {
    const base =
      "w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2";
    switch (theme) {
      case "theme1":
        return `${base} border-gray-300 focus:border-blue-500 focus:ring-blue-200`;
      case "theme2":
        return `${base} bg-gray-800 border-gray-600 text-white focus:border-amber-500 focus:ring-amber-200`;
      case "theme3":
        return `${base} border-purple-300 focus:border-pink-500 focus:ring-pink-200 bg-white/50`;
    }
  };

  return (
    <div className={getPageClass()}>
      {theme === "theme2" && (
        <aside className="w-64 bg-gray-800 border-r border-gray-700 p-6">
          <h3 className="text-xl font-bold text-white mb-6 font-serif">
            Contact Info
          </h3>
          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="text-amber-400 font-serif">Email</h4>
              <p>hello@hipsterapp.com</p>
            </div>
            <div>
              <h4 className="text-amber-400 font-serif">Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
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
              ? "text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 text-center"
              : ""
          }
        `}
          style={theme === "theme3" ? { fontFamily: "Pacifico, cursive" } : {}}
        >
          Get In Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2
              className={`text-2xl font-bold mb-6
              ${theme === "theme1" ? "text-gray-900" : ""}
              ${theme === "theme2" ? "text-amber-400 font-serif" : ""}
              ${theme === "theme3" ? "text-purple-800" : ""}
            `}
            >
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className={`block text-sm font-medium mb-2
                  ${theme === "theme1" ? "text-gray-700" : ""}
                  ${theme === "theme2" ? "text-gray-300 font-serif" : ""}
                  ${theme === "theme3" ? "text-purple-700" : ""}
                `}
                >
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={getInputClass()}
                  required
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2
                  ${theme === "theme1" ? "text-gray-700" : ""}
                  ${theme === "theme2" ? "text-gray-300 font-serif" : ""}
                  ${theme === "theme3" ? "text-purple-700" : ""}
                `}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={getInputClass()}
                  required
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2
                  ${theme === "theme1" ? "text-gray-700" : ""}
                  ${theme === "theme2" ? "text-gray-300 font-serif" : ""}
                  ${theme === "theme3" ? "text-purple-700" : ""}
                `}
                >
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className={getInputClass()}
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105
                  ${
                    theme === "theme1"
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : ""
                  }
                  ${
                    theme === "theme2"
                      ? "bg-amber-500 hover:bg-amber-600 text-black font-serif"
                      : ""
                  }
                  ${
                    theme === "theme3"
                      ? "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                      : ""
                  }
                `}
              >
                Send Message
              </button>
            </form>
          </div>

          <div
            className={`rounded-lg p-8
            ${theme === "theme1" ? "bg-white shadow-lg" : ""}
            ${theme === "theme2" ? "bg-gray-800 border border-gray-700" : ""}
            ${
              theme === "theme3" ? "bg-white/60 backdrop-blur-sm shadow-xl" : ""
            }
          `}
          >
            <h3
              className={`text-xl font-bold mb-4
              ${theme === "theme1" ? "text-gray-900" : ""}
              ${theme === "theme2" ? "text-white font-serif" : ""}
              ${theme === "theme3" ? "text-purple-800" : ""}
            `}
            >
              Why Contact Us?
            </h3>

            <ul
              className={`space-y-3
              ${theme === "theme1" ? "text-gray-600" : ""}
              ${theme === "theme2" ? "text-gray-300 font-serif" : ""}
              ${theme === "theme3" ? "text-purple-700" : ""}
            `}
            >
              <li>• Get expert advice on React development</li>
              <li>• Learn about our theme architecture</li>
              <li>• Discuss potential collaborations</li>
              <li>• Share feedback on our approach</li>
            </ul>

            <div
              className={`mt-6 p-4 rounded-lg
              ${theme === "theme1" ? "bg-blue-50 border border-blue-200" : ""}
              ${theme === "theme2" ? "bg-gray-700 border border-amber-500" : ""}
              ${
                theme === "theme3"
                  ? "bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300"
                  : ""
              }
            `}
            >
              <p
                className={`text-sm
                ${theme === "theme1" ? "text-blue-800" : ""}
                ${theme === "theme2" ? "text-amber-400 font-serif" : ""}
                ${theme === "theme3" ? "text-purple-800" : ""}
              `}
              >
                💡 Pro Tip: Try switching themes while on this page to see how
                our contact form adapts!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
