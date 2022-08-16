import "../assets/css/ProductsList.css";
import ProductItem from "./ProductItem";
import filteredData from "../utils/filteredData";

const ProductsList = ({
  products,
  inputValue,
  itemClickHandler,
  activeProduct,
}) => {
  let suggestionItem = filteredData(products, inputValue);

  return (
    <ul className="list-container">
      {suggestionItem.map((item) => (
        <ProductItem
          activeProduct={activeProduct}
          key={item}
          name={item}
          itemClickHandler={itemClickHandler}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
