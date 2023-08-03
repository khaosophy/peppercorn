import clsx from 'clsx';
import formClasses from '@/lib/base-form-class';

export default function TextArea(props) {
  return (
    <div className={props.className}>
      <label
        className="mb-2 block text-sm font-medium text-gray-700"
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <textarea
        className={clsx(
          formClasses,
        )}
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        rows={props.rows}
        required={props.required}
      />
    </div>
  );
}