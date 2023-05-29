import classNames from "classnames"

export default function Button(props) {
  return (
    <button
      className={classNames(
        props.className,
        'rounded-md bg-indigo-600 hover:bg-indigo-500',
        'px-3 py-1.5',
        'text-sm font-semibold leading-6 text-white',
        'shadow-sm',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      )}
    >
      {props.children}
    </button>
  )
}