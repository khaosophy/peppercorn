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
  
  const handleChange = (event, id) => {
    const newInstructions = [...instructions];
    const key = newInstructions.findIndex((instruction) => instruction.id === id);
    newInstructions[key].text = event.target.value;
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

  const removeStep = (id) => {
    const newInstructions = [...instructions];
    
    const key = newInstructions.findIndex((instruction) => instruction.id === id);
    
    // update the order of the steps after the removed step
    for (let i = key + 1; i < newInstructions.length; i++) {
      newInstructions[i].order = newInstructions[i].order - 1;
    }
    
    if (newInstructions.length > 1) {
      newInstructions.splice(key, 1);
      newInstructions[key - 1].isFocused = true;
    } else {
      newInstructions[0].text = '';
      newInstructions[0].isFocused = true;
    }
    
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
            isFocused={instruction.isFocused}
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

const Step = (props) => {
  const { 
    id,
    order,
    value,
    isFocused,
    onChange,
    add,
    remove,
  } = props;

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
          if(order === 1) return;
          remove(id);
        }
    }

    input.addEventListener('keydown', handleEvents);

    return () => {
      input.removeEventListener('keydown', handleEvents);
    }
  }, [order, remove, add, id]);

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div className='relative'>
      <label htmlFor={`step-${id}`} className="sr-only">
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
          id={`step-${id}`}
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