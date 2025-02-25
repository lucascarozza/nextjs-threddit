import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconType } from 'react-icons';

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

interface ButtonIconProps {
  icon: IconType;
  className?: string;
}

interface ButtonTextProps {
  children: ReactNode;
  className?: string;
}

const ButtonRoot = ({ 
  children, 
  className = "", 
  ...props 
}: ButtonRootProps) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center h-11 min-w-11 gap-2 px-3 py-2 bg-zinc-800 border-1 border-zinc-700 rounded-full transition-all hover:bg-gradient-to-t hover:from-pink-500 hover:to-yellow-500 hover:text-zinc-50 hover:cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const ButtonIcon = ({ 
  icon: Icon, 
  className = "", 
  ...props 
}: ButtonIconProps) => {
  return <Icon className={className} {...props} aria-hidden="true" />;
};

const ButtonText = ({ 
  className = "", 
  children, 
  ...props 
}: ButtonTextProps) => {
  return <span className={className} {...props}>{children}</span>;
};

export const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
  Text: ButtonText,
};