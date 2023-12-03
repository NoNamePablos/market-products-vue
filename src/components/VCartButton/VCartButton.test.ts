import { mount, VueWrapper } from '@vue/test-utils';
import { VCartButton, type VCartButtonProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VCartButtonProps = {};

describe('VCartButton', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VCartButton, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

