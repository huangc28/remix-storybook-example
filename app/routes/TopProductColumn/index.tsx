import { useEffect } from 'react';
import { json } from '@remix-run/node';
import { useFetcher } from '@remix-run/react';
import type { ActionFunction } from '@remix-run/node';

type ActionType = {
  top_products: any[],
  super_deal_products: any[],
}
interface TopProductsColumnProps { }
export const action: ActionFunction = async ({ request }) => {
  console.log('debug !!');
  return json<ActionType>({
    top_products: [],
    super_deal_products: [],
  });
};
function TopProductsColumn({ }: TopProductsColumnProps) {
  const fetcher = useFetcher();
  useEffect(() => {
    fetcher.submit(
      {},
      {
        method: 'post',
        action: '/TopProductsColumn?index',
      });
  }, []);

  return (
    <div>
      TopProductsColumn
    </div>
  )
}

export default TopProductsColumn;