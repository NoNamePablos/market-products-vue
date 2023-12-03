import type { Meta, StoryObj } from '@storybook/vue3';
import { VCartButton } from '.';

const meta = {
  title: 'VCartButton',
  component: VCartButton,
  render: (args: any) => ({
    components: { VCartButton },
    setup() {
      return { args };
    },
    template: '<VCartButton v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VCartButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
