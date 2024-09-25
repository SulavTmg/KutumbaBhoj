import { useState, useEffect } from "react";

type ProgressProviderProps = {
  valueStart: number;
  valueEnd: number;
  children: (value: number) => JSX.Element;
};
const ProgressProvider = ({
  valueStart,
  valueEnd,
  children,
}: ProgressProviderProps) => {
  const [value, setValue] = useState(valueStart);
  useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};
export default ProgressProvider;
