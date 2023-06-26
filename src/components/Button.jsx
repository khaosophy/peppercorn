import { forwardRef } from 'react';
import clsx from 'clsx';

const Button = forwardRef(function Button(props, ref) {
  return (
    <button
      {...props}
      ref={ref}
      className={clsx(
        props.className,
        'rounded-md bg-indigo-600 hover:bg-indigo-500',
        'px-3 py-1.5',
        'text-sm font-semibold leading-6 text-white',
        'shadow-sm',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      )}
    >
      {props.children}
    </button>
  )
});

export default Button;