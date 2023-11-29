import { mount, VueWrapper } from '@vue/test-utils';
import { VIcon, type VIconProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VIconProps = {};

describe('VIcon', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VIcon, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

