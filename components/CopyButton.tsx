import React, { useState } from 'react';

interface CopyButtonProps {
    textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        if (!textToCopy || isCopied) return;
        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const CopyIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
    );

    const CheckIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    );

    return (
        <button
            onClick={handleCopy}
            disabled={!textToCopy}
            className={`flex items-center px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ease-in-out
                ${isCopied
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }
                ${!textToCopy ? 'opacity-50 cursor-not-allowed' : ''}
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-white dark:focus:ring-offset-gray-900`}
            aria-label={isCopied ? "Copied to clipboard" : "Copy text to clipboard"}
        >
            {isCopied ? CheckIcon : CopyIcon}
            <span className="ml-1.5">{isCopied ? 'Copied!' : 'Copy'}</span>
        </button>
    );
};

export default CopyButton;