import type { Meta, StoryObj } from '@storybook/vue3';
import { VContainer } from '.';

const meta = {
  title: 'VContainer',
  component: VContainer,
  render: (args: any) => ({
    components: { VContainer },
    setup() {
      return { args };
    },
    template: '<VContainer v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
