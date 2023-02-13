import Link from "next/link";
import { useSomeContext } from "../store/SomeContext";

export const PageOneScreen = () => {
  const { value, setValue } = useSomeContext();

  return (
    <div>
      <h1>Page 1</h1>
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)}>increment</button>
      <Link href="/page-two">go to page 2</Link>
    </div>
  );
};
