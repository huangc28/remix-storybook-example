import type { Meta, StoryFn } from '@storybook/react';

import { useArgs } from '@storybook/client-api';

import { createRemixStub } from '../../packages/remix-stubs/src/create-remix-stub';

import TopProductsColumn from './index';

let story: Meta<typeof TopProductsColumn> = {
  title: 'Top Products Column',
  component: TopProductsColumn,
  decorators: [
    (Story) => {
      const [args, updateArgs] = useArgs();
      const RemixStub = createRemixStub([
        {
          element: (<Story />),
          path: 'product/1234',
          loader: () => { return null },
          action: async ({ request }) => {
            return { top_products: [], super_deal_products: [] };
          },
        }
      ]);

      return (<RemixStub initialLoaderData={{ "product/1234": null }} initialEntries={["product/1234"]} />);
    }
  ],
};

export default story;

const Template: StoryFn<typeof TopProductsColumn> = (args) => {
  return (<TopProductsColumn {...args} />)
};
export const Basic = Template.bind({});