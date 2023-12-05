import ProductDetailsComs from "@/components/productdetails/ProductDetails";
import { useRouter } from "next/router";

export default function ProductDetailsPage() {
    const router = useRouter()
    console.log(router.query.slug,'precious')
  return <ProductDetailsComs productID={router.query.slug! as string} />;
}
