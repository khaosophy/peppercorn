import clsx from 'clsx';

export const formReset = 'appearance-none';
export const formDisplay = 'block w-full';
export const formSpacing = 'px-3 py-2';
export const formBorder = 'rounded-md border border-gray-200';
export const formBackground = 'bg-gray-50';
export const formText = 'text-gray-900 placeholder-gray-400 sm:text-sm';
export const formFocus = 'focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500';
export const formFocusWithin = 'focus-within:ring-1 focus-within:border-blue-500 focus-within:outline-none focus-within:ring-blue-500'

const formClasses = clsx(
  formReset,
  formDisplay,
  formSpacing,
  formBorder,
  formBackground,
  formText,
  formFocus,
);

export default formClasses;