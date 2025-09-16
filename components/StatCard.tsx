import React from 'react';
import type { StatCardProps } from '../types';

const StatCard: React.FC<StatCardProps> = ({ label, value, icon }) => {
    return (
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg flex items-start space-x-4 transition-all duration-300 hover:bg-gray-100/70 dark:hover:bg-gray-800/70 hover:shadow-lg hover:scale-105 border border-gray-200 dark:border-gray-800">
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-sky-500 dark:text-sky-400">
                {icon}
            </div>
            <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
                <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
            </div>
        </div>
    );
};

export default StatCard;