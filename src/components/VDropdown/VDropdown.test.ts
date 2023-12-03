import { mount, VueWrapper } from '@vue/test-utils';
import { VDropdown, type VDropdownProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VDropdownProps = {};

describe('VDropdown', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VDropdown, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

