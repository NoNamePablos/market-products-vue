import type { Meta, StoryObj } from '@storybook/vue3';
import { VHeaderNavigation } from '.';

const meta = {
  title: 'VHeaderNavigation',
  component: VHeaderNavigation,
  render: (args: any) => ({
    components: { VHeaderNavigation },
    setup() {
      return { args };
    },
    template: '<VHeaderNavigation v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VHeaderNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
