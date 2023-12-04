import { ProductList } from "@/Data/Product";
import style from "./ProductsView.module.scss";
import { useState } from "react";

export default function ProductsView() {
  const [searchValue, setSearchValue] = useState("");
  const [productListValue, setProductListValue] = useState(ProductList);
  const handleChange = (value: string) => {
    setSearchValue(value);
    console.log(value);
    const filterValue = productListValue.filter((productItem,index) => {
      return productItem.name.toLowerCase() === value.toLowerCase();
    })
    setProductListValue(filterValue)
  };
  return (
    <div>
      <div className={style.container}>
        <div>
          <input
            placeholder="search.."
            type="text"
            value={searchValue}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        {productListValue.map((product, index) => {
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
    </div>
  );
}
