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
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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