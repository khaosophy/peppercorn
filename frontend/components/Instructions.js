import PropTypes from 'prop-types';
import TextArea from './TextArea';

function Instructions(props) {
  const { steps, setInstructions } = props;
  
  const deleteStep = (event, key) => {
    event.preventDefault();
    const newSteps = [...steps].filter(step => step._id !== key);
    setInstructions(newSteps);
  }

  const addStep = () => {
    setInstructions([...steps, {
      _id: Date.now(),  // TEMP value for React. MongoDB will assign a real ID on save
      position: steps.length + 1,
      text: '',
    }]);
  }

  const updateStep = (event, key) => {
    const newSteps = JSON.parse(JSON.stringify(steps)) // deep copy the array of objects
    /* todo: why is a deep copy needed here but not in delete? is this overkill? */
    newSteps.find(step => step._id === key).text = event.target.value;
    setInstructions(newSteps);
  }

  return (
    <fieldset>
      <legend>Instructions</legend>

      {steps.map((step) => (
        <div key={step._id} style={{display: 'flex'}}>
          <label htmlFor={`step_${step._id}`} className="field__label">Step {step.position}</label>
          <textarea id={`step_${step._id}`} value={step.text} onChange={(e) => updateStep(e, step._id)} />
          <button onClick={(e) => deleteStep(e, step._id)}>Delete</button>
        </div>
      ))}

      <span
        style={{ cursor: 'pointer' }}
        onClick={addStep}
      >
        + Add Step
      </span>
    </fieldset>
  )
}

export default Instructions;