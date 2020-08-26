import PropTypes from 'prop-types';
import InputField from './InputField';
import SelectField from './SelectField';
import TextArea from './TextArea';

class RecipeForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.data.name || '',
      servings: this.props.data.servings || '',
      description: this.props.data.description || '',
      type: this.props.data.type || '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form
        id={this.props.id}
        className="recipe-form"
        onSubmit={this.props.onSubmit}
      >
        <InputField 
          type="text"
          label="Recipe Name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          required
        />
        <TextArea
          label="Description"
          name="description"
          onChange={this.handleChange}
        >
          {this.state.description}
        </TextArea>
        <InputField 
          type="number"
          label="Servings"
          name="servings"
          onChange={this.handleChange}
          value={this.state.servings}
        />
        {/* todo: instructions / steps */}
        <SelectField 
          label="Recipe Type"
          name="type"
          onChange={this.handleChange}
          options={[{value: 'onePot', text: 'One Pot'}, {value: 'side', text: 'Side'}, {value: 'main', text: 'Main'}]}
        />
        <button>Save Recipe</button>
      </form>
    )
  }
}

export default RecipeForm;

RecipeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string,
}