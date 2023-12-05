import { ProductList } from "@/Data/Product";

export default function ProductDetailsComs(props: { productID: string }) {
  const filterValue = ProductList.filter(
    (productItem) => productItem.name == props.productID
  );
  const productItem = filterValue[0];
  return (
    <div>
        
    </div>
  );
}
