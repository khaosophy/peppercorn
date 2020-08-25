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
    }
  }

  handleInputChange(key, value) {
    this.setState({ [key]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('form submitted!');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputField 
          type="text"
          class="test"
          label="Recipe Name"
          onChange={(e) => this.handleInputChange('name', e.target.value)}
          value={this.state.name}
          required
        />
        <TextArea label="Description" onChange={(e) => this.handleInputChange('description', e.target.value)}>
          {this.state.description}
        </TextArea>
        <InputField 
          type="number"
          label="Servings"
          onChange={(e) => this.handleInputChange('servings', e.target.value)}
          value={this.state.servings}
        />
        {/* todo: instructions / steps */}
        <SelectField 
          label="Recipe Type"
          onChange={(e) => this.handleInputChange('type', e.target.value)}
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
}