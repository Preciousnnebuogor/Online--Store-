import { ProductList } from "@/Data/Product";
import style from "./Product.module.scss";
export default function Products() {
  return (
    <div className={style.container}>
      {ProductList.map((product, index) => {
        return (
          <div className={style.productitem} key={index}>
            <img src={product.image} />
            <div className={style.text}>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
