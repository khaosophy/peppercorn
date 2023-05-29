import classNames from 'classnames';

export default function InputField(props) {
  return (
    <div className={props.className}>
      <label
        className="block text-sm font-medium leading-6 text-gray-900"
        htmlFor={props.id}
      >
          {props.label}
        </label>
      <input
          className={classNames(
            'block w-full rounded-md border-0',
            'py-1.5 px-3',
            'shadow-sm ring-1 ring-inset ring-gray-300',
            'focus:ring-2 focus:ring-inset focus:ring-indigo-600',
            'text-gray-900 placeholder:text-gray-400',
            'sm:text-sm sm:leading-6',
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