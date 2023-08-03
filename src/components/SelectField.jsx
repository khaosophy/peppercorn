import clsx from 'clsx';
import formClasses from '@/lib/base-form-class';

export default function SelectField(props) {
  return (
    <div className={props.className}>
      <label
        className="mb-2 block text-sm font-medium text-gray-700"
        htmlFor={props.id}
      >
          {props.label}
        </label>
      <select
          className={clsx(
            formClasses,
          )}
          type={props.type}
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          required={props.required}
      >
        {props.children}
      </select>
    </div>
  );
}