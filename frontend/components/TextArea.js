import PropTypes from 'prop-types';

const TextArea = (props) => {
  return (
    <React.Fragment>
      <label>{props.label}</label>
      <textarea>{props.children}</textarea> {/* or props.content? */}
    </React.Fragment>
  )
}

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
}