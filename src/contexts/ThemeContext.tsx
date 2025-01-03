import { createContext, ReactNode, useContext } from 'react';
import { ITheme, useTheme } from '@/hooks';

const ThemeContext = createContext<ITheme | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  return context;
};

interface IThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: IThemeProviderProps) {
  const { isLight, textColor } = useTheme();

  return <ThemeContext.Provider value={{ isLight, textColor }}>{children}</ThemeContext.Provider>;
}
