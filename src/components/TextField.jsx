import clsx from 'clsx';

export default function TextField(props) {
  const formClasses =
    'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm';

  return (
    <div className={props.className}>
      <label
        className={clsx(
          'mb-2 block text-sm font-medium text-gray-700',
          props.isLabelHidden && 'sr-only',
        )}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        className={clsx(
          formClasses,
        )}
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
    </div>
  );
}