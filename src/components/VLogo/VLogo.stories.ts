import type { Meta, StoryObj } from '@storybook/vue3';
import { VLogo } from '.';

const meta = {
  title: 'VLogo',
  component: VLogo,
  render: (args: any) => ({
    components: { VLogo },
    setup() {
      return { args };
    },
    template: '<VLogo v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
