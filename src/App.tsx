import { BrowserRouter, Route } from "react-router-dom";
import ItemMain from "./components/items/ItemMain";
import ItemDetail from "./components/items/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" element={<ItemMain />} />
      <Route exact path="/item/:key" element={<ItemDetail />} />
    </BrowserRouter>
  );
}

export default App;
