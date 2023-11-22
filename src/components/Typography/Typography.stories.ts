import type { Meta, StoryObj } from '@storybook/vue3';
import { Typography } from '.';

const meta = {
  title: 'Typography',
  component: Typography,
  render: (args: any) => ({
    components: { Typography },
    setup() {
      return { args };
    },
    template: '<Typography v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
