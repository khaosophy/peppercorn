import PropTypes from 'prop-types';

const InputField = (props) => {
  return (
    <React.Fragment>
      <label>{props.label}</label>
      <input 
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder ? props.placeholder : ''}
        required={props.required}
      />
    </React.Fragment>
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
  placeholder: PropTypes.string,
  required: PropTypes.bool
}