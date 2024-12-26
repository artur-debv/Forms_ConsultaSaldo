<<<<<<< Updated upstream:Form2/src/components/InputField.tsx
import React from "react";

export function InputField({ id, type, placeholder }) {
    return (
        <div>
            <label htmlFor={id} className="sr-only">{placeholder}</label>
            <input
                name={id}
                type={type}
                required
                className="appearance-none mb-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                placeholder={placeholder}
            />
        </div>
    );
}
=======
import { forwardRef } from 'react';

// Define os tipos das propriedades do InputField
type InputFieldProps = {
    type: string;
    placeholder?: string; // Torne opcional, se necessário
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputField = forwardRef < HTMLInputElement, InputFieldProps> (
    ({ type, placeholder, ...rest }, ref) => (
        <input
            type={type}
            placeholder={placeholder}
            ref={ref}
            {...rest}
            className="appearance-none mb-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        />
    )
);
>>>>>>> Stashed changes:Form2/src/components/InputField.jsx
