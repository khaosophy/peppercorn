import PropTypes from 'prop-types';

const TextArea = (props) => {
  return (
    <React.Fragment>
      <label>{props.label}</label>
      <textarea
        cols={props.cols}
        rows={props.rows}
        required={props.required}>
          {props.children}
      </textarea>
    </React.Fragment>
  )
}

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  class: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  required: PropTypes.bool,
}