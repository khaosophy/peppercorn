import PropTypes from 'prop-types';

const SelectField = (props) => {
  return (
    <React.Fragment>
      <label>{props.label}</label>
      <select value={props.value} onChange={props.onChange}>
        {props.options.map((option) => <option key={option.value} value={option.value}>{option.text}</option>)}
      </select>
    </React.Fragment>
  )
}

export default SelectField;

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.string,
  required: PropTypes.bool
}