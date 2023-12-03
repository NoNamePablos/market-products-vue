import type { Meta, StoryObj } from '@storybook/vue3';
import { VAvatar } from '.';

const meta = {
  title: 'VAvatar',
  component: VAvatar,
  render: (args: any) => ({
    components: { VAvatar },
    setup() {
      return { args };
    },
    template: '<VAvatar v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
