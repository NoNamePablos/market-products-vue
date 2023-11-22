import type { Meta, StoryObj } from '@storybook/vue3';
import { VHeader } from '.';

const meta = {
  title: 'VHeader',
  component: VHeader,
  render: (args: any) => ({
    components: { VHeader },
    setup() {
      return { args };
    },
    template: '<VHeader v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
