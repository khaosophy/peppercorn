import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline'] },
    color: { control: 'select', options: ['slate', 'blue', 'white'] },
    shape: { control: 'select', options: ['square', 'rounded'] },
  },
}

export const Default = {
  args: {
    children: 'Click Me',
    variant: 'solid',
    color: 'slate',
    shape: 'square',
  },
}

