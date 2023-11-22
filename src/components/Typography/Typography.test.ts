import { mount, VueWrapper } from '@vue/test-utils';
import { Typography, type TypographyProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: TypographyProps = {};

describe('Typography', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(Typography, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

