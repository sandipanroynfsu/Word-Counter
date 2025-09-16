import React, { useState, useEffect, useMemo, useRef } from 'react';
import Header from './components/Header';
import StatCard from './components/StatCard';
import FormattingToolbar from './components/FormattingToolbar';
import { StatCardProps } from './types';

// Icons for StatCards
const WordIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const CharIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const SentenceIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
const ParagraphIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>;
const ReadingTimeIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const App: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme') as 'light' | 'dark';
        }
        if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    });
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    
    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };
    
    const handleClear = () => {
        setText('');
    };

    const handleCapitalize = () => {
        setText(text.toUpperCase());
    };

    const handleFormat = (formatType: 'bold' | 'italic') => {
        const textarea = textareaRef.current;
        if (!textarea) return;
    
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
    
        if (start === end) return; // Only format if text is selected
    
        const selectedText = text.substring(start, end);
        const beforeText = text.substring(0, start);
        const afterText = text.substring(end);
    
        const marker = formatType === 'bold' ? '**' : '*';
        const formattedText = `${marker}${selectedText}${marker}`;
    
        const newText = beforeText + formattedText + afterText;
        setText(newText);
        
        // After updating text, focus and adjust cursor position
        textarea.focus();
        const newCursorPosition = start + formattedText.length;
        // Use a timeout to ensure the selection happens after the state update has rendered
        setTimeout(() => textarea.setSelectionRange(newCursorPosition, newCursorPosition), 0);
    };

    const stats = useMemo(() => {
        const trimmedText = text.trim();
        const words = trimmedText ? trimmedText.match(/[\p{L}\p{N}'’`-]+/gu) || [] : [];
        const sentences = trimmedText ? trimmedText.match(/[^.!?]+[.!?]+/g) || [] : [];
        const paragraphs = trimmedText ? trimmedText.split(/\n+/).filter(p => p.trim() !== '') : [];

        const readingTime = `${Math.ceil(words.length / 200)} min read`;

        const baseStats: StatCardProps[] = [
            { label: 'Words', value: words.length, icon: WordIcon },
            { label: 'Characters', value: text.length, icon: CharIcon },
            { label: 'Sentences', value: sentences.length, icon: SentenceIcon },
            { label: 'Paragraphs', value: paragraphs.length, icon: ParagraphIcon },
            { label: 'Reading Time', value: readingTime, icon: ReadingTimeIcon },
        ];
        
        return baseStats;
    }, [text]);

    return (
        <div className={`min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300 ${theme}`}>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main className="container mx-auto p-4 md:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 flex flex-col bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
                        <textarea
                            ref={textareaRef}
                            value={text}
                            onChange={handleTextChange}
                            placeholder="Start typing or paste your text here..."
                            className="w-full h-64 md:h-96 flex-grow p-4 bg-transparent rounded-t-lg focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none text-base"
                        />
                        <FormattingToolbar 
                            text={text}
                            onClear={handleClear}
                            onCapitalize={handleCapitalize}
                            onFormat={handleFormat}
                            isDisabled={!text}
                        />
                    </div>
                    
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat) => (
                                <StatCard key={stat.label} {...stat} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;