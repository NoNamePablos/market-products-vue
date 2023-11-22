import type { Meta, StoryObj } from '@storybook/vue3';
import { VButton } from '.';

const meta = {
  title: 'VButton',
  component: VButton,
  render: (args: any) => ({
    components: { VButton },
    setup() {
      return { args };
    },
    template: '<VButton v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
