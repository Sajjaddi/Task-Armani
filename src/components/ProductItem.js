import "../assets/css/ProductItem.css";

const ProductItem = ({ name, itemClickHandler, activeProduct }) => {
  let active = "";
  if (activeProduct === name) {
    active = "selected";
  }
  return (
    <>
      <li
        className={`product-item ${active}`}
        onClick={() => itemClickHandler(name)}
      >
        {name}
      </li>
    </>
  );
};

export default ProductItem;
