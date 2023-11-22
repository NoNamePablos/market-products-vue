import { mount, VueWrapper } from '@vue/test-utils';
import { VHeader, type VHeaderProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VHeaderProps = {};

describe('VHeader', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VHeader, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

