import React from "react";
import { useTheme } from "../contexts/ThemeContext";

export const LoadingSpinner: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center items-center py-12">
      <div
        className={`animate-spin rounded-full h-12 w-12 border-4 border-t-transparent
        ${theme === "theme1" ? "border-blue-600" : ""}
        ${theme === "theme2" ? "border-amber-500" : ""}
        ${theme === "theme3" ? "border-pink-500" : ""}
      `}
      ></div>
    </div>
  );
};
