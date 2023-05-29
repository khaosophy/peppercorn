import _Link from 'next/link';
import classNames from 'classnames';

export default function Link({ className, href, children }) {
  return (
    <_Link
      href={href}
      className={classNames(
        className,
        'font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
      )}
    >
      {children}
    </_Link>
  )
}