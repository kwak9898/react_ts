import { BrowserRouter, Route } from "react-router-dom";
import ItemMain from "./components/items/ItemMain";
import ItemView from "./components/items/ItemView";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" element={<ItemMain />} />
      <Route exact path="/item/:key" element={<ItemView />} />
    </BrowserRouter>
  );
}

export default App;
