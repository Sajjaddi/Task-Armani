const fetchData = async (url) => {
  const response = await fetch(url);
  const {products} = await response.json();
  const productsTitle = [];
  
  for (const key in products) {
    productsTitle.push(products[key].title);
  }

  return productsTitle;
};

export default fetchData;
