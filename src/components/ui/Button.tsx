import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, icon, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';
    
    const variants = {
      primary: 'bg-brand-green hover:bg-brand-green-dark text-white shadow-md hover:shadow-lg focus:ring-brand-green',
      outline: 'border border-gray-200 bg-white hover:bg-gray-50 text-brand-black shadow-sm focus:ring-gray-200 hover:border-gray-300',
      ghost: 'bg-transparent hover:bg-gray-100 text-brand-black focus:ring-gray-200',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-5 text-sm',
      lg: 'h-13 px-8 text-base',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {icon && <span className="mr-2 flex items-center">{icon}</span>}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
