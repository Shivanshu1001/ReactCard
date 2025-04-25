import type { Meta, StoryObj } from '@storybook/react';
import App from '../../App';

const meta: Meta<typeof App> = {
  title: 'Cards/UI',
  component: App,
};
export default meta;

type Story = StoryObj<typeof App>;

export const Default: Story = {
  args: {
    label : 'Email address',
    ToggleEvent: true
  },
};
