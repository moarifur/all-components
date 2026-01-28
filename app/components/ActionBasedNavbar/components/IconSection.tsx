import React from 'react';
import {Bell, MessageSquare, Search, User} from "lucide-react";

const IconSection: React.FC<Props> = ({isScrolled}) => {
    return (
        <div className="flex items-center space-x-4">
            <button className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white hover:bg-white/20'
            }`}>
                <Search size={20}/>
            </button>
            <button className={`p-2 rounded-full hover:bg-gray-100 transition-colors relative ${
                isScrolled ? 'text-gray-700' : 'text-white hover:bg-white/20'
            }`}>
                <Bell size={20}/>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className={`p-2 rounded-full hover:bg-gray-100 transition-colors relative ${
                isScrolled ? 'text-gray-700' : 'text-white hover:bg-white/20'
            }`}>
                <MessageSquare size={20}/>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white hover:bg-white/20'
            }`}>
                <User size={20}/>
            </button>
        </div>
    );
};

interface Props {
    isScrolled: boolean;
}

export default IconSection;