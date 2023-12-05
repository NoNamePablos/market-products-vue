import { mount, VueWrapper } from '@vue/test-utils';
import { VUserList, type VUserListProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VUserListProps = {};

describe('VUserList', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VUserList, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

