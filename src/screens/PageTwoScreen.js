import Link from "next/link";
import { useSomeContext } from "../store/SomeContext";

export const PageTwoScreen = () => {
  const { value, increment } = useSomeContext();

  return (
    <div>
      <h1>Page 2</h1>
      <div>{value}</div>
      <button onClick={increment}>increment</button>
      <Link href="/page-one">go to page 1</Link>
    </div>
  );
};
