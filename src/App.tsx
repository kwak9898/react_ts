import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemMain from "./components/items/ItemMain";
import ItemCreate from "./components/items/ItemCreate";
import ItemDetail from "./components/items/ItemDetail";
import ItemEdit from "./components/items/ItemEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemMain />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/item/:id/edit" element={<ItemEdit />} />
        <Route path="/item/add" element={<ItemCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
