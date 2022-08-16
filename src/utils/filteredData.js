const filteredData = (data, value) => {
  const filteredData = data.filter(
    (suggestion) =>
      suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
  );
  
  return filteredData;
};

export default filteredData;
