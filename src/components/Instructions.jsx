import clsx from 'clsx';
import { CiCircleMinus as Remove } from 'react-icons/ci';
import { CgMathPlus as Add } from 'react-icons/cg';
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
 * add step
 *  - "enter" while any instruction input is focused
 *  - update focus new new inputs
 * remove step
 *  - "backspace" on empty input
 */

export default function Instructions(props) {
  const { value: instructions, onChange } = props;
  
  const handleChange = (event, key) => {
    const newInstructions = [...instructions];
    newInstructions[key] = event.target.value;
    onChange({ instructions: newInstructions });
  };

  const removeStep = (key) => {
    const newInstructions = [...instructions];
    if (newInstructions.length === 1) return onChange({ instructions: [''] });
    newInstructions.splice(key, 1);
    onChange({ instructions: newInstructions });
  };

  return (
    <fieldset>
      <legend className="block text-sm mb-2 font-medium text-gray-700">Instructions</legend>
      <div className="space-y-2">
        {instructions.map((instruction, index) => (
          <div key={index} className='relative'>
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
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <button
              className={clsx(
                'absolute -right-7 top-1/2 transform -translate-y-1/2',
              )}
              onClick={() => removeStep(index)}
            >
              <Remove size="1.35rem" />
            </button>
          </div>
        ))}
        <button
          className='flex items-center text-sm text-gray-700 px-2'
          onClick={() => onChange({ instructions: [...instructions, ''] })}
        >
          <Add /> Add Step
        </button>
      </div>
    </fieldset>
  );
}