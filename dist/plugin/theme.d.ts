import { RevealPlugin } from 'reveal.js';
export interface ThemePlugin extends RevealPlugin {
    id: 'theme';
    toggle(): void;
    setTheme(theme: 'light' | 'dark'): void;
}
declare const Theme: () => ThemePlugin;
export default Theme;
