import { mount, VueWrapper } from '@vue/test-utils';
import { VButton, type VButtonProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VButtonProps = {};

describe('VButton', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VButton, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

