import React from 'react';

interface CapitalizeButtonProps {
    onCapitalize: () => void;
    isDisabled: boolean;
}

const CapitalizeButton: React.FC<CapitalizeButtonProps> = ({ onCapitalize, isDisabled }) => {
    
    const CapitalizeIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5v-9a3 3 0 013-3h0a3 3 0 013 3v9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15h6" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 19.5v-4.8a1.2 1.2 0 011.2-1.2h1.6a1.2 1.2 0 011.2 1.2v4.8" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 16.5h4.8" />
        </svg>
    );

    return (
        <button
            onClick={onCapitalize}
            disabled={isDisabled}
            className={`flex items-center px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ease-in-out
                bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300
                hover:enabled:bg-gray-300 dark:hover:enabled:bg-gray-600
                disabled:opacity-50 disabled:cursor-not-allowed
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-white dark:focus:ring-offset-gray-900`}
            aria-label="Convert text to uppercase"
        >
            {CapitalizeIcon}
            <span className="ml-1.5">Uppercase</span>
        </button>
    );
};

export default CapitalizeButton;