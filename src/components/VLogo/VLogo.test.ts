import { mount, VueWrapper } from '@vue/test-utils';
import { VLogo, type VLogoProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VLogoProps = {};

describe('VLogo', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VLogo, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

