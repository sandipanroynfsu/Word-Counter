import React from 'react';

interface TextFormatButtonsProps {
    onFormat: (formatType: 'bold' | 'italic') => void;
    isDisabled: boolean;
}

const TextFormatButtons: React.FC<TextFormatButtonsProps> = ({ onFormat, isDisabled }) => {
    const BoldIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h7a3 3 0 013 3v0a3 3 0 01-3 3H5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 16h8a3 3 0 013-3v0a3 3 0 01-3-3H5" />
        </svg>
    );

    const ItalicIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5l4 14" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 19h14" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 5h14" />
        </svg>
    );

    return (
        <>
            <button
                onClick={() => onFormat('bold')}
                disabled={isDisabled}
                className="flex items-center p-1.5 rounded-md text-sm font-medium transition-all duration-200 ease-in-out bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:enabled:bg-gray-300 dark:hover:enabled:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                aria-label="Apply bold formatting"
                title="Bold"
            >
                {BoldIcon}
            </button>
            <button
                onClick={() => onFormat('italic')}
                disabled={isDisabled}
                className="flex items-center p-1.5 rounded-md text-sm font-medium transition-all duration-200 ease-in-out bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:enabled:bg-gray-300 dark:hover:enabled:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                aria-label="Apply italic formatting"
                title="Italic"
            >
                {ItalicIcon}
            </button>
        </>
    );
};

export default TextFormatButtons;
