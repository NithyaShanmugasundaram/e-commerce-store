import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product';

const Homepage = async() => {
  const latestProdcuts=await getLatestProducts();
  return (
    <>
      <ProductList
        data={latestProdcuts}
        title='Newest Arrivals'
        limit={4}
      />
    </>
  );
};

export default Homepage;
