import PropTypes from 'prop-types';

const TextArea = (props) => {
  return (
    <div id={props.id} className="field">
      <label className="field__label">{props.label}</label>
      <textarea
        className="field__input"
        value={props.children}
        cols={props.cols}
        rows={props.rows}
        name={props.name}
        onChange={props.onChange}
        required={props.required}
      ></textarea>
    </div>
  )
}

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  class: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  required: PropTypes.bool,
}