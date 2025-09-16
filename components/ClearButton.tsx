import React from 'react';

interface ClearButtonProps {
    onClear: () => void;
    isDisabled: boolean;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClear, isDisabled }) => {
    const handleClick = () => {
        // Use a native browser confirm dialog for simplicity
        if (window.confirm('Are you sure you want to clear the text? This action cannot be undone.')) {
            onClear();
        }
    };

    const TrashIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    );

    return (
        <button
            onClick={handleClick}
            disabled={isDisabled}
            className={`flex items-center px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ease-in-out
                bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300
                hover:enabled:bg-red-500 hover:enabled:text-white dark:hover:enabled:bg-red-600
                disabled:opacity-50 disabled:cursor-not-allowed
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-offset-white dark:focus:ring-offset-gray-900`}
            aria-label="Clear text"
        >
            {TrashIcon}
            <span className="ml-1.5">Clear</span>
        </button>
    );
};

export default ClearButton;