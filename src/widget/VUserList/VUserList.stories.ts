import type { Meta, StoryObj } from '@storybook/vue3';
import { VUserList } from '.';

const meta = {
  title: 'VUserList',
  component: VUserList,
  render: (args: any) => ({
    components: { VUserList },
    setup() {
      return { args };
    },
    template: '<VUserList v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VUserList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
