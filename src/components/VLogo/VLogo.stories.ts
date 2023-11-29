import type {Meta, StoryFn, StoryObj} from '@storybook/vue3';
import { VLogo } from '@/components/VLogo';



const meta = {
  title: 'Shared/VLogo',
  component: VLogo,
  tags: ['autodocs'],
} satisfies Meta<typeof VLogo>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Template:StoryFn=(args)=>({
  components:{VLogo},
  setup(){
    return {args};
  },
  template: '<VLogo v-bind="args" />',
})

export const Default: Story = {
  render:Template,
  argTypes:{
    orientation:{
      options:['vertical','horizontal'],
      control:'select'
    },
    bgColor:{
      options:['white','black'],
      control:'select'
    },
    type:{
      options:['text','znak','full'],
      control:'select'
    },
    colorfull:{
      control:'boolean'
    },
    withText:{
      control:'boolean'
    }
  },
  args:{
    orientation:'vertical',
    withText:true,
    bgColor:'white',
    type:'text',
    colorfull:true
  }
};
export const Icon: Story = {
  render:Template,
  argTypes:{
    orientation:{
      options:['vertical','horizontal'],
      control:'select'
    },
    bgColor:{
      options:['white','black'],
      control:'select'
    },
    type:{
      options:['text','znak','full'],
      control:'select'
    },
    colorfull:{
      control:'boolean'
    },
    withText:{
      control:'boolean'
    }
  },
  args:{
    orientation:'vertical',
    bgColor:'white',
    type:'znak',
    colorfull:true
  }
};
