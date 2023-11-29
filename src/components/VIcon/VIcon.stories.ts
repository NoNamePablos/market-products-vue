import type { Meta, StoryObj } from '@storybook/vue3';
import { VIcon } from '.';

const meta = {
  title: 'VIcon',
  component: VIcon,
  render: (args: any) => ({
    components: { VIcon },
    setup() {
      return { args };
    },
    template: '<VIcon v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
