import { ProductList } from "@/Data/Product";
import style from "./Product.module.scss";
export default function Products() {
  return (
    <>
      <div className={style.colos}>
        <div className={style. mid}>
        <h2>Categories</h2>
        <h2>Classic</h2>
        <h2>Come</h2>
        </div>
      </div>
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
    </>
  );
}
