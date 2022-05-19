import { Route, Routes } from "react-router-dom";
import ListPage from "./components/ListPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/film/:id" element={<ListPage />} />
    </Routes>
    </>
  );
}

export default App;
