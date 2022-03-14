import { GlobalStyle } from "./styles/global";
import { ItemsPage } from "./pages/ItemsPage";
import { CreateItemPage } from "./pages/CreateItemPage";

export function App() {
  return (
    <>
      <CreateItemPage />
      <GlobalStyle />
    </>
  );
}
