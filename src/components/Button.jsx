import { forwardRef } from 'react';
import Link from './Link';
import clsx from 'clsx';

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center focus:outline-none',
}

const shapeStyles = {
  rounded: 'rounded-full',
  square: 'rounded-md',
}

const sizeStyles = {
  sm: 'text-sm py-2 px-4',
  md: 'text-base py-3 px-6',
  lg: 'text-lg py-4 px-8',
  xl: 'text-xl py-5 px-10',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },
}

const Button = forwardRef(function Button(props, ref) {
  let {
    variant = 'solid',
    color = 'slate',
    shape = 'square',
    size = 'sm',
    className,
    href,
  } = props;

  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    shapeStyles[shape],
    sizeStyles[size],
    className
  )

  return href ? (
    <Link {...props} href={href} ref={ref} className={className}>{props.children}</Link>
  ) : (
    <button {...props} className={className} ref={ref}>{props.children}</button>
  )
});

export default Button;