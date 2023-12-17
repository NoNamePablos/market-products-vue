import { mount, VueWrapper } from '@vue/test-utils';
import { VUserMenu, type VUserMenuProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VUserMenuProps = {};

describe('VUserMenu', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VUserMenu, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

