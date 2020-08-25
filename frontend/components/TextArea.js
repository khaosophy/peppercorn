import PropTypes from 'prop-types';

const TextArea = (props) => {
  return (
    <React.Fragment>
      <label>{props.label}</label>
      <textarea
        value={props.children}
        cols={props.cols}
        rows={props.rows}
        onChange={props.onChange}
        required={props.required}>
      </textarea>
    </React.Fragment>
  )
}

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  class: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  required: PropTypes.bool,
}