import { mount, VueWrapper } from '@vue/test-utils';
import { VHeaderNavigation, type VHeaderNavigationProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VHeaderNavigationProps = {};

describe('VHeaderNavigation', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VHeaderNavigation, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

