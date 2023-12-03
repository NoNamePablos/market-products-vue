import { mount, VueWrapper } from '@vue/test-utils';
import { VAvatar, type VAvatarProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VAvatarProps = {};

describe('VAvatar', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VAvatar, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

