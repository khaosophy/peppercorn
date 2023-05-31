import { forwardRef } from 'react';
import { Menu } from '@headlessui/react'
import { CgMoreVerticalAlt } from 'react-icons/cg';
import Button from './Button';
import Link from './Link';

export default function ActionMenu ({ items }) {
  {/* todo: include transition */}
  {/* todo: keyboard navigation */}
  return (
    <Menu as="div" className="relative">
      <Menu.Button><CgMoreVerticalAlt size="1.25rem" /></Menu.Button>
      <Menu.Items className="absolute flex flex-col right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {items.map(item => (
          <Menu.Item key={item.id}>
            <Component {...item}>
              {item.label}
            </Component>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

const Component = forwardRef(function Component({ children, ...props }, ref) {
  if (props.href) {
    return <Link ref={ref} {...props}>{children}</Link>
  } else {
    return <Button ref={ref} {...props}>{children}</Button>
  }
});