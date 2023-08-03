import clsx from 'clsx';
import { 
  formReset,
  formDisplay,
  formSpacing,
  formBorder,
  formBackground,
  formText,
  formFocusWithin,
} from '@/lib/base-form-class';

/**
 * TODO:
 * onChange handler
 * add step
 *  - "add" icon
 *  - "tab" while last input is focused
 *  - "enter" while any instruction input is focused (and update focus to new input)
 * remove step
 *  - "delete" icon
 *  - "backspace" on empty input
 */

export default function Instructions(props) {
  const { value, onChange } = props;
  console.log(value);
  return (
    <fieldset>
      <legend className="block text-sm mb-2 font-medium text-gray-700">Instructions</legend>
      <div className="space-y-2">
        {value.map((instruction, index) => (
          <div key={index}>
            <label htmlFor={`instruction-${index}`} className="sr-only">
              Step ${index + 1}
            </label>
            <div className={clsx(
              'flex',
              formBorder,
              formFocusWithin,
            )}>
              <span className={clsx(
                'inline-flex rounded-l-md border-r',
                formSpacing,
              )}>
                {index + 1}
              </span>
              <input
                type="text"
                id={`instruction-${index}`}
                className={clsx(
                  'flex-1 rounded-none rounded-r-md',
                  formReset,
                  formDisplay,
                  formSpacing,
                  'border-0',
                  formBackground,
                  formText,
                  'focus:bg-white',
                  'focus:ring-0',
                )}
                value={instruction}
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}