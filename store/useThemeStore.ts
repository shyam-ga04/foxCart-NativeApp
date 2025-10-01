import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  mode: 'light' | 'dark';
  toggleMode: () => void;
}

const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      mode: 'light',
      toggleMode: () =>
        set(state => ({ mode: state.mode === 'light' ? 'dark' : 'light' })),
    }),
    {
      name: 'theme-mode',
    },
  ),
);

export default useThemeStore;
