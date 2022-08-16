import { useEffect, useState } from "react";
import InputText from "./InputText";
import ProductsList from "./ProductsList";
import "../assets/css/AutoComplete.css";
import fetchData from "../utils/fetchData";
import ArrowIcon from "./ArrowIcon";
import filteredData from "../utils/filteredData";

const AutoComplete = () => {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [autoCompletedMode, setIsActiveAutoCompleted] = useState({
    isActive: false,
    activeProduct: null,
  });

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
    setIsActiveAutoCompleted((prevState) => {
      return {
        ...prevState,
        isActive: true,
      };
    });
  };

  const arrowIconClickHandler = () => {
    setIsActiveAutoCompleted((prevState) => {
      return {
        ...prevState,
        isActive: !prevState.isActive,
      };
    });
  };

  const itemClickHandler = (name) => {
    setInputValue(name);
    setIsActiveAutoCompleted((prevState) => {
      return {
        activeProduct: name,
        isActive: !prevState.isActive,
      };
    });
  };
  const inputKeyDownHandler = (event) => {
    if (event.keyCode === 13) {
      if (inputValue) {
        let filteredProducts = filteredData(products, inputValue);
        setInputValue(filteredProducts[0]);
        setIsActiveAutoCompleted((prevState) => {
          return {
            activeProduct: filteredProducts[0],
            isActive: !prevState.isActive,
          };
        });
      }
    }
  };

  useEffect(() => {
    fetchData("https://dummyjson.com/products").then((productsTitle) => {
      setProducts(productsTitle);
    });
  }, []);

  return (
    <div
      className={`input-container ${
        autoCompletedMode.isActive ? "active" : ""
      }`}
    >
      <ArrowIcon
        onClickHandler={arrowIconClickHandler}
      />
      <InputText
        onKeyDownInput={inputKeyDownHandler}
        inputValue={inputValue}
        onInputChange={inputChangeHandler}
      />
      <ProductsList
        products={products}
        inputValue={inputValue}
        itemClickHandler={itemClickHandler}
        activeProduct={autoCompletedMode.activeProduct}
      />
    </div>
  );
};

export default AutoComplete;
