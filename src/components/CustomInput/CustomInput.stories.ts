import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import CustomInput from '@/components/CustomInput/CustomInput';

const meta: Meta<typeof CustomInput> = {
  component: CustomInput,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    }
  },
  args: {
    placeholder: 'Test placeholder',
    onChange: fn(),
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    'aria-label': 'Enter text',
  }
};
