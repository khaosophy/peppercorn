import { useEffect, useRef } from 'react';
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
import uid from '@/lib/uid';

/**
 * TODO:
 *  - improve focus flow
 */

export default function Instructions(props) {
  const { value: instructions, onChange } = props;
  
  const handleChange = (event, key) => {
    // todo: update to use ID instead of index/key
    const newInstructions = [...instructions];
    newInstructions[key] = event.target.value;
    onChange({ instructions: newInstructions });
  };

  const addStep = (id) => {
    const newInstructions = [...instructions];
    const newId = uid();

    if(!id) {
      // if no ID is passed, add a new step to the end of the array
      newInstructions.push({ id: newId, order: newInstructions.length + 1, text: '', isFocused: true });
      return onChange({ instructions: newInstructions });
    }
    
    const key = newInstructions.findIndex((instruction) => instruction.id === id);
    
    // update the order of the steps after the new step
    for (let i = key + 1; i < newInstructions.length; i++) {
      newInstructions[i].order = newInstructions[i].order + 1;
    }

    const newStep = { id: newId, order: key + 2, text: '', isFocused: true };
    newInstructions.splice(key + 1, 0, newStep);
    onChange({ instructions: newInstructions });
  };

  const removeStep = (key) => {
    // todo: update to use ID instead of index/key
    const newInstructions = [...instructions];
    if (newInstructions.length === 1) return onChange({ instructions: [''] });
    newInstructions.splice(key, 1);
    onChange({ instructions: newInstructions });
  };

  return (
    <fieldset>
      <legend className="block text-sm mb-2 font-medium text-gray-700">Instructions</legend>
      <div className="space-y-2">
        {instructions.map((instruction) => (
          <Step
            key={instruction.id}
            id={instruction.id}
            order={instruction.order}
            value={instruction.text}
            onChange={handleChange}
            remove={removeStep}
            add={addStep}
          />
        ))}
        <button
          type="button"
          className='flex items-center text-sm text-gray-700 px-2'
          onClick={() => addStep()}
        >
          <Add /> Add Step
        </button>
      </div>
    </fieldset>
  );
}

const Step = ({ id, order, value, onChange, add, remove }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    /**
     * when this component mounts, do the following
     * - attach an event that listens for "enter" keypress, and have it create a new step when pressed
     * - attach an event that listens for "backspace" keypress, and have it remove the step if the input is empty
     */
    const input = inputRef.current;
    function handleEvents(e) {
        if (e.key === 'Enter') {
          add(id);
        }
        if (e.key === 'Backspace' && e.target.value === '') {
          remove(index);
        }
    }

    input.addEventListener('keydown', handleEvents);

    return () => {
      input.removeEventListener('keydown', handleEvents);
    }
  }, [remove]);

  return (
    <div className='relative'>
      <label htmlFor={`instruction-${id}`} className="sr-only">
        Step ${order}
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
          {order}
        </span>
        <input
          ref={inputRef}
          type="text"
          id={`instruction-${id}`}
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
          value={value}
          onChange={(e) => onChange(e, id)}
        />
      </div>
      <button
        type="button"
        className={clsx(
          'absolute -right-7 top-1/2 transform -translate-y-1/2',
        )}
        onClick={() => remove(id)}
      >
        <Remove size="1.35rem" />
      </button>
    </div>
  );
}