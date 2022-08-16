import "../assets/css/InputText.css";

const InputText = ({ inputValue, onInputChange, onKeyDownInput }) => {
  return (
    <input
      onKeyDown={onKeyDownInput}
      type="text"
      maxLength={48}
      placeholder="Products"
      value={inputValue}
      onChange={onInputChange}
    />
  );
};

export default InputText;
