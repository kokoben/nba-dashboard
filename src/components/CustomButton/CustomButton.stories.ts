import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import CustomButton from '@/components/CustomButton/CustomButton';

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
  argTypes: {
    type: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    type: 'button',
    className: 'test-class',
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};
