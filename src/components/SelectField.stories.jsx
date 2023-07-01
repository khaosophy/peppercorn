import SelectField from './SelectField';

export default {
  title: 'Select Field',
  component: SelectField,
}

export const Default = {
  render: () => <SelectField label="Form Field">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </SelectField>,
}

