import type { Meta, StoryObj } from '@storybook/vue3';
import { VDropdown } from '.';

const meta = {
  title: 'VDropdown',
  component: VDropdown,
  render: (args: any) => ({
    components: { VDropdown },
    setup() {
      return { args };
    },
    template: '<VDropdown v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
