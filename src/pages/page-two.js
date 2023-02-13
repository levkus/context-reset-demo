import { SomeProvider } from "../store/SomeContext";
import { PageTwoScreen } from "../screens/PageTwoScreen";

export default function PageTwo() {
  return (
    <SomeProvider>
      <PageTwoScreen />
    </SomeProvider>
  );
}
