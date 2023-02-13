import { SomeProvider } from "../store/SomeContext";
import { PageOneScreen } from "../screens/PageOneScreen";

export default function PageOne() {
  return (
    <SomeProvider>
      <PageOneScreen />
    </SomeProvider>
  );
}
