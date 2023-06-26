import { forwardRef } from 'react';
import _Link from 'next/link';
import clsx from 'clsx';

const Link = forwardRef(function Link(props, ref) {
  const { href, className, children } = props;
  return (
    <_Link
      href={href}
      className={clsx(
        className,
        'font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
      )}
      ref={ref}
    >
      {children}
    </_Link>
  )
});

export default Link;