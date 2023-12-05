import { ProductList } from "@/Data/Product";
import style from "./ProductsView.module.scss";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function ProductsView() {
  const [searchValue, setSearchValue] = useState("");
  const [productListValue, setProductListValue] = useState(ProductList);
  const handleChange = (value: string) => {
    setSearchValue(value);
    console.log(value);
    const filterValue = productListValue.filter((productItem, index) => {
      return productItem.name.toLowerCase().includes(value.toLowerCase());
    });
    if (filterValue.length === 0) {
      setProductListValue(ProductList);
    } else {
      setProductListValue(filterValue); 
    }
  
  };
  return (
    <div>
      <div className={style.come}>
        <div className={style.search}>
          <div className={style.icon}>
            <FaSearch />
          </div>
          <input
            placeholder="search.."
            type="text"
            value={searchValue}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
      <div className={style.container}>
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
