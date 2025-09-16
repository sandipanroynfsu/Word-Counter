import React from 'react';
import CopyButton from './CopyButton';
import ClearButton from './ClearButton';
import CapitalizeButton from './CapitalizeButton';
import TextFormatButtons from './TextFormatButtons';

interface FormattingToolbarProps {
    text: string;
    onClear: () => void;
    onCapitalize: () => void;
    onFormat: (formatType: 'bold' | 'italic') => void;
    isDisabled: boolean;
}

const FormattingToolbar: React.FC<FormattingToolbarProps> = ({
    text,
    onClear,
    onCapitalize,
    onFormat,
    isDisabled,
}) => {
    return (
        <div className="flex flex-wrap items-center gap-2 p-2 border-t border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center gap-2">
                <CopyButton textToCopy={text} />
                <ClearButton onClear={onClear} isDisabled={isDisabled} />
                <CapitalizeButton onCapitalize={onCapitalize} isDisabled={isDisabled} />
            </div>
            <div className="h-5 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>
            <div className="flex items-center gap-2">
                <TextFormatButtons onFormat={onFormat} isDisabled={isDisabled} />
            </div>
        </div>
    );
};

export default FormattingToolbar;
