import { forwardRef } from 'react';
import _Link from 'next/link';
import classNames from 'classnames';

const Link = forwardRef(function Link(props, ref) {
  const { href, className, children } = props;
  return (
    <_Link
      href={href}
      className={classNames(
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