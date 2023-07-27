import TextField from "./TextField";

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
 * UI: include input leading number (see Tailwind input with add-on, but we will use the index, such as 1, 2, 3, etc.)
 */

export default function Instructions(props) {
  const { value, onChange } = props;
  console.log(value);
  return (
    <fieldset>
      <legend className="block text-sm mb-2 font-medium text-gray-700">Instructions</legend>
      <div className="space-y-2">
        {value.map((instruction, index) => (
          <TextField
            label={`Step ${index + 1}`}
            isLabelHidden
            key={index}
            value={instruction}
          />
        ))}
      </div>
    </fieldset>
  );
}