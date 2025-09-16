import React from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    return (
        <header className="relative text-center p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/60 backdrop-blur-sm">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">Word Counter Pro</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Your Advanced Text Analysis Tool</p>
            <div className="absolute top-1/2 right-6 -translate-y-1/2">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
        </header>
    );
};

export default Header;