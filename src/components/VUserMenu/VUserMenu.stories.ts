import type { Meta, StoryObj } from '@storybook/vue3';
import { VUserMenu } from '.';

const meta = {
  title: 'VUserMenu',
  component: VUserMenu,
  render: (args: any) => ({
    components: { VUserMenu },
    setup() {
      return { args };
    },
    template: '<VUserMenu v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VUserMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
