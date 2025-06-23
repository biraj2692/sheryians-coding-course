import { lazy, Suspense } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteProducts from "../utils/useInfiniteProducts";

const ProductTemplate = lazy(() => import("../Components/ProductTemplate"));

const Products = () => {
  const {product, hasMore, fetchProducts} = useInfiniteProducts();

  return product.length > 0 ? (
    <InfiniteScroll
      dataLength={product.length}
      next={fetchProducts}
      loader={<h4>Loading...</h4>}
      hasMore={hasMore}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className=" flex flex-wrap">
        {product.map((product) => (
          <Suspense key={product.id} fallback={<h1>Loading.........</h1>}>
            <ProductTemplate product={product} />
          </Suspense>
        ))}
      </div>
    </InfiniteScroll>
  ) : (
    <div>Loading....</div>
  );
};

export default Products;
