import CostomerTable from "./page/CostomerTable";
import Login from "./page/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/table" element={<CostomerTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
