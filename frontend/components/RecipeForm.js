import PropTypes from 'prop-types';
import InputField from './InputField';
import SelectField from './SelectField';
import TextArea from './TextArea';

class RecipeForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.data ? this.props.data.name : '',
      servings: this.props.data ? this.props.data.servings : '',
      description: this.props.data ? this.props.data.description : '',
      // type: this.props.data.type || '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    
    const data = JSON.stringify({...this.state});

    if(this.props.action === 'edit') {
      const res = await fetch(`http://localhost:5000/api/v1/recipes/${this.props.recipeId}`, {
        method: 'PUT',
        body: data,
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const response = await res.json();
      if(response.success) {
        //todo: redirect to Recipe page and show success notice
        console.log('update successful!');
      } else {
        //todo: show failure
        console.error('update failed!');
      }
    }

    if(this.props.action === 'create') {
      const res = await fetch(`http://localhost:5000/api/v1/recipes`, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const response = await res.json();
      if(response.success) {
        //todo: redirect to new Recipe page and show success notice
        // maybe include a link to create another recipe?
        console.log('new recipe created!');
      } else {
        // todo: show failure
        console.error('update failed!');
      }
    }
  }

  render() {
    return (
      <form
        id={this.props.id}
        className="recipe-form"
        onSubmit={this.handleSubmit}
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
        {/* <SelectField 
          label="Recipe Type"
          name="type"
          onChange={this.handleChange}
          options={[{value: 'onePot', text: 'One Pot'}, {value: 'side', text: 'Side'}, {value: 'main', text: 'Main'}]}
        /> */}
        <button>Save Recipe</button>
      </form>
    )
  }
}

export default RecipeForm;

RecipeForm.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
  action: PropTypes.oneOf(['edit', 'create']),
  recipeId: PropTypes.string,
  id: PropTypes.string,
}