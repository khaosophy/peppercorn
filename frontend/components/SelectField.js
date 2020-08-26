import PropTypes from 'prop-types';

const SelectField = (props) => {
  return (
    <div id={props.id} className="field">
      <label className="field__label">{props.label}</label>
      <select
        className="field__input"
        value={props.value}
        name={props.name}
        onChange={props.onChange}
      >
        {props.options.map((option) => <option key={option.value} value={option.value}>{option.text}</option>)}
      </select>
    </div>
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  id: PropTypes.string,
  class: PropTypes.string,
  required: PropTypes.bool
}