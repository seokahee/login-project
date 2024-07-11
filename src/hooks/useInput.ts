import { ChangeEvent, useState } from "react";

const useInput = (): [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  () => void,
] => {
  const [value, setValue] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };
  return [value, changeHandler, reset];
};

export default useInput;
