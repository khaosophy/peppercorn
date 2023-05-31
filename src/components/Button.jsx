import { forwardRef } from "react";
import classNames from "classnames"

const Button = forwardRef(function Button(props, ref) {
  return (
    <button
      ref={ref}
      className={classNames(
        props.className,
        'rounded-md bg-indigo-600 hover:bg-indigo-500',
        'px-3 py-1.5',
        'text-sm font-semibold leading-6 text-white',
        'shadow-sm',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      )}
      {...props}
    >
      {props.children}
    </button>
  )
});

export default Button;