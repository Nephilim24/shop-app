import { useState } from "react";
import styles from "./styles.module.scss";

interface TextFieldProps {
  type: string;
  title: string;
  placeholder: string;
}

const TextField: React.FC<TextFieldProps> = ({ type, placeholder, title }) => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  return (
    <label className={styles.label}>
      <span>{title}</span>
      <input
        type={type}
        id={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </label>
  );
};

export default TextField;
