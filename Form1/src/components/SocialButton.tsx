import React, { ReactNode } from 'react';

interface SocialButtonProps {
    href: string;
    children: ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, children }) => {
    return (
        <a
            href={href}
            className="w-full items-center gap-2  inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 "
        >
            {children}
        </a>
    );
};

export default SocialButton;
