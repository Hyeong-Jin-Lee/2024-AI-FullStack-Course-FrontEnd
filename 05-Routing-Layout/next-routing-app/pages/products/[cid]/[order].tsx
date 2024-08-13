import { useRouter } from "next/router";

const ProductCategory = () => {
  const router = useRouter();

  return (
    <div>
      제품 카테고리 페이지:{router.query.id} - 정렬방식:{router.query.order}
    </div>
  );
};

export default ProductCategory;
