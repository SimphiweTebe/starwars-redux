import { Route, Routes } from "react-router-dom";
import ListPage from "./containers/listPage/ListPage";
import DetailPage from "./containers/detailPage/DetailPage";
import NavItem from "./components/navItem/NavItem";

function App() {
  return (
    <>
    <NavItem />
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/film/:id" element={<DetailPage />} />
    </Routes>
    </>
  );
}

export default App;
