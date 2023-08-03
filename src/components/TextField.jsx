import clsx from 'clsx';
import formClasses from '@/lib/base-form-class';

export default function TextField(props) {
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