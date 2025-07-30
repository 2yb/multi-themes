// Product interface for FakeStore API
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Theme types
export type Theme = "theme1" | "theme2" | "theme3";

// Theme context interface
export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isAnimating: boolean;
}

// Form data interface for contact form
export interface FormData {
  name: string;
  email: string;
  message: string;
}

// Props interfaces for components
export interface ProductCardProps {
  product: Product;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}

// Hook return types
export interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
}

// Common style function return types
export type StyleFunction = () => string;

// React event handler types
export type ThemeSelectHandler = (
  event: React.ChangeEvent<HTMLSelectElement>
) => void;
export type FormSubmitHandler = (
  event: React.FormEvent<HTMLFormElement>
) => void;
export type InputChangeHandler = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

// Navigation types
export interface NavItem {
  path: string;
  label: string;
  icon?: string;
}

// Theme configuration type
export interface ThemeConfig {
  name: string;
  value: Theme;
  description: string;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Error handling types
export interface AppError {
  message: string;
  code?: string | number;
  details?: any;
}

// Component state types
export interface ComponentState {
  loading: boolean;
  error: string | null;
  data: any;
}

// Animation state types
export interface AnimationState {
  isAnimating: boolean;
  animationType?: "fade" | "slide" | "scale";
  duration?: number;
}
