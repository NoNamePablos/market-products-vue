import { mount, VueWrapper } from '@vue/test-utils';
import { VContainer, type VContainerProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VContainerProps = {};

describe('VContainer', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VContainer, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

