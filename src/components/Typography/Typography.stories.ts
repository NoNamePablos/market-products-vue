import type {Meta, StoryFn, StoryObj} from '@storybook/vue3';
import { Typography } from '@/components/Typography';

const meta = {
  title: 'Typography/Typography',
  component: Typography,
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export const Template:StoryFn=(args)=>({
  components:{Typography},
  setup(){
    return {args};
  },
  template: '<Typography v-bind="args" >Тестовое сообщение</Typography>',
})
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render:Template,
  argTypes:{
    tag:{
      options:['h1','h2','h3','h4','h5','h6','p','span'],
      control: 'radio'
    },
    bold:{
      control:'boolean'
    },
    size:{
      options:['xs','s','m','l','xl'],
      control: 'radio'
    }
  }
};
