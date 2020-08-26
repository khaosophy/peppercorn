import PropTypes from 'prop-types';

const InputField = (props) => {
  return (
    <div id={props.id} className="field">
      <label className="field__label">{props.label}</label>
      <input 
        className="field__input"
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder ? props.placeholder : ''}
        required={props.required}
      />
    </div>
  )
}

export default InputField;

InputField.defaultProps = {
  type: "text"
}

InputField.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'tel', 'number']).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  class: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
}