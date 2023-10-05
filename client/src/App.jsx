import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterPagSortReduxSagaTest1 from "./components/FilterPagSortReduxSagaTest1";
import FilterPagSortReduxSagaTest2 from "./components/FilterPagSortReduxSagaTest2";
import FilterPagSortReduxSagaTest3 from "./components/FilterPagSortReduxSagaTest3";

export default function App() {
  return (
    // <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<FilterPagSortReduxSagaTest1 />} /> */}
      {/* <Route path="/" element={<FilterPagSortReduxSagaTest2 />} /> */}
      <Route path="/" element={<FilterPagSortReduxSagaTest3 />} />
    </Routes>
    // </BrowserRouter>
  );
}
