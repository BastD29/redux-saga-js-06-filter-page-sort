import FilterPaginateSortTest1 from "./components/FilterPaginateSortTest1";
import FilterPaginateSortTest2 from "./components/FilterPaginateSortTest2";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterPaginateSortTest3 from "./components/FilterPaginateSortTest3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<FilterPaginateSortTest1 />} /> */}
        {/* <Route path="/" element={<FilterPaginateSortTest2 />} /> */}
        <Route path="/" element={<FilterPaginateSortTest3 />} />
      </Routes>
    </BrowserRouter>
  );
}
