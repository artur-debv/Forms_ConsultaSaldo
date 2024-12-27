import React, { ReactNode } from 'react';

interface ButtonProps {
  type: 'button' | 'submit';
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, children }) => {
  return (
    <button
      type={type}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:bg-green-700"
      style={{
        backgroundColor: 'var(--Button-Color)', // Aplica a cor do botão
        color: 'var(--text-color)', // Aplica a cor do texto
      }}
    >
      {children}
    </button>
  );
};

export default Button;
