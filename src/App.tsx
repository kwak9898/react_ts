import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCreate from "./components/items/ItemCreate";
import ItemDetail from "./components/items/ItemDetail";
import ItemEdit from "./components/items/ItemEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemCreate />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/item/:id/edit" element={<ItemEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
