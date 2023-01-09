import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./pages/Join";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
