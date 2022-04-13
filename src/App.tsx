import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemMain from "./components/items/ItemMain";
import ItemDetail from "./components/items/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemMain />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
